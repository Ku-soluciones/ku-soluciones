export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface DeepSeekResponse {
  message: string;
  error?: string;
}

export class DeepSeekService {
  private static readonly API_URL = 'https://api.deepseek.com/v1/chat/completions';
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendMessage(message: string, conversationHistory: ChatMessage[] = []): Promise<DeepSeekResponse> {
    try {
      const messages = [
        {
          role: 'system',
          content: `Eres el agente digital de Kü Soluciones. Ayudas a PYMEs y emprendimientos en su transformación digital.

SERVICIOS: Sitios web, tiendas online, automatización, sistemas de gestión, integración de plataformas.

RESPUESTAS BREVES Y PERSONALES:
- Usa el nombre del usuario si lo conoces
- Máximo 2-3 oraciones por respuesta
- Pregunta específica para entender la necesidad
- Sé cálido pero conciso

CONTACTO Y PRECIOS:
- Para precios: deriva SIEMPRE a contacto@ku-soluciones.cl
- Solo ofrece contacto por CORREO ELECTRÓNICO
- NUNCA menciones teléfono o WhatsApp
- Para cualquier consulta detallada: contacto@ku-soluciones.cl

NUNCA inventes precios ni servicios no disponibles.

Responde en español chileno, cercano y profesional.`
        },
        ...conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        {
          role: 'user',
          content: message
        }
      ];

      const response = await fetch(DeepSeekService.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: messages,
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      return {
        message: data.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta.'
      };
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      return {
        message: 'Lo siento, hubo un problema al procesar tu mensaje. Por favor, intenta nuevamente.',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Función para crear instancia del servicio (en un entorno real, la API key vendría de variables de entorno)
export const createDeepSeekService = () => {
  const apiKey = (import.meta as any).env?.VITE_DEEPSEEK_API_KEY;
  
  // Verificar si la API key es válida
  const isValidApiKey = apiKey && apiKey.startsWith('sk-') && apiKey.length >= 20;
  
  if (!isValidApiKey) {
    console.warn('API Key inválida o no encontrada. Usando servicio simulado.');
    // Retornar un mock service mejorado para desarrollo
    return {
      sendMessage: async (message: string): Promise<DeepSeekResponse> => {
        // Simular delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Respuestas simuladas más inteligentes y contextuales
        const lowerMessage = message.toLowerCase();
        
        // Extraer nombre del usuario si se menciona
        const nameMatch = message.match(/(?:me llamo|soy|mi nombre es|llámame)\s+([A-Za-zÁáÉéÍíÓóÚúÑñ]+)/i);
        const userName = nameMatch ? nameMatch[1] : null;
        
        // Respuestas a saludos
        if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas')) {
          if (userName) {
            return {
              message: `¡Hola ${userName}! Me alegra conocerte. ¿En qué puedo ayudarte hoy?`
            };
          } else {
            return {
              message: `¡Hola! Soy el asistente de Kü Soluciones. ¿Cómo te llamas?`
            };
          }
        }
        
        // Respuestas específicas según el tipo de consulta
        if (lowerMessage.includes('sitio web') || lowerMessage.includes('página web')) {
          const personalizedResponse = userName 
            ? `¡Perfecto ${userName}! Creamos sitios web modernos y funcionales. ¿Qué tipo de empresa tienes?`
            : `¡Perfecto! Creamos sitios web modernos y funcionales. ¿Qué tipo de empresa tienes?`;
          
          return { message: personalizedResponse };
        }
        
        if (lowerMessage.includes('tienda') || lowerMessage.includes('ecommerce') || lowerMessage.includes('ventas online')) {
          const personalizedResponse = userName
            ? `¡Excelente ${userName}! Desarrollamos tiendas online completas. ¿Qué productos vendes?`
            : `¡Excelente! Desarrollamos tiendas online completas. ¿Qué productos vendes?`;
          
          return { message: personalizedResponse };
        }
        
        if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuánto')) {
          const personalizedResponse = userName
            ? `Los precios varían según cada proyecto, ${userName}. Para una cotización personalizada, escribe a contacto@ku-soluciones.cl`
            : `Los precios varían según cada proyecto. Para una cotización personalizada, escribe a contacto@ku-soluciones.cl`;
          
          return { message: personalizedResponse };
        }
        
        if (lowerMessage.includes('automatización') || lowerMessage.includes('procesos')) {
          const personalizedResponse = userName
            ? `¡La automatización optimiza tu empresa, ${userName}! ¿Qué procesos te gustaría automatizar?`
            : `¡La automatización optimiza tu empresa! ¿Qué procesos te gustaría automatizar?`;
          
          return { message: personalizedResponse };
        }
        
        // Respuesta general personalizada
        const responses = userName ? [
          `Entiendo, ${userName}. En Kü ayudamos con sitios web, tiendas online y automatización. ¿Qué necesitas específicamente?`,
          `Gracias por contactarnos, ${userName}. ¿Podrías contarme más sobre tu empresa?`,
          `Perfecto, ${userName}. Para más detalles, escribe a contacto@ku-soluciones.cl`
        ] : [
          `En Kü ayudamos con sitios web, tiendas online y automatización. ¿Qué necesitas específicamente?`,
          `Gracias por contactarnos. ¿Podrías contarme más sobre tu empresa?`,
          `Para más detalles, escribe a contacto@ku-soluciones.cl`
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        return {
          message: randomResponse
        };
      }
    };
  }
  
  return new DeepSeekService(apiKey);
};