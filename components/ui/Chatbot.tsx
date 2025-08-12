import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, createDeepSeekService } from '../../services/deepseek';

const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
);

const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

interface ChatbotProps {
  className?: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    // Solo inicializar con mensaje de bienvenida si no hay mensajes previos
    return [
      {
        role: 'assistant',
        content: '¡Hola! Soy el agente digital de Kü Soluciones. ¿Cómo te llamas? Me encantaría ayudarte con tu transformación digital.',
        timestamp: new Date()
      }
    ];
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const deepseekService = createDeepSeekService();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    // Detectar si el usuario está proporcionando su nombre - más flexible
    if (!userName) {
      const namePatterns = [
        /(?:me llamo|soy|mi nombre es|llámame)\s+([A-Za-zÁáÉéÍíÓóÚúÑñ]+)/i,
        /^([A-Za-zÁáÉéÍíÓóÚúÑñ]{2,15})$/i, // Solo el nombre como respuesta
        /hola,?\s+soy\s+([A-Za-zÁáÉéÍíÓóÚúÑñ]+)/i // "Hola soy Juan"
      ];
      
      for (const pattern of namePatterns) {
        const nameMatch = inputMessage.match(pattern);
        if (nameMatch) {
          const detectedName = nameMatch[1];
          // Verificar que no sea una palabra común que no sea un nombre
          const commonWords = ['hola', 'gracias', 'bien', 'mal', 'sí', 'no', 'bueno', 'malo', 'precio', 'costo'];
          if (!commonWords.includes(detectedName.toLowerCase()) && detectedName.length >= 2) {
            setUserName(detectedName);
            console.log('Nombre detectado:', detectedName);
            break;
          }
        }
      }
    }

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log('Enviando mensaje al servicio...');
      console.log('Nombre del usuario:', userName);
      
      const response = await deepseekService.sendMessage(
        userMessage.content,
        messages.slice(-5), // Enviar solo los últimos 5 mensajes para contexto
        userName // Pasar el nombre del usuario
      );

      console.log('Respuesta recibida:', response);

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Lo siento, hubo un problema al procesar tu mensaje. Por favor, intenta nuevamente. Si el problema persiste, contacta a soporte@ku-soluciones.cl',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pomegranate-600 hover:bg-pomegranate-700 dark:bg-pomegranate-500 dark:hover:bg-pomegranate-600 
                     text-white p-4 rounded-full shadow-lg hover:shadow-xl 
                     transform hover:scale-110 transition-all duration-300 
                     focus:outline-none focus:ring-4 focus:ring-pomegranate-500/50"
          aria-label="Abrir chat"
        >
          <ChatIcon className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 
                        w-80 h-96 flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 
                          bg-pomegranate-600 dark:bg-pomegranate-700 text-white rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <ChatIcon className="w-5 h-5" />
              <h3 className="font-semibold text-sm">Asistente KÜ-Soluciones</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-pomegranate-700 dark:hover:bg-pomegranate-800 p-1 rounded-lg 
                         transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Cerrar chat"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                    message.role === 'user'
                      ? 'bg-pomegranate-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Container */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 
                           rounded-xl focus:outline-none focus:ring-2 focus:ring-pomegranate-500 
                           bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                           disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-pomegranate-600 hover:bg-pomegranate-700 dark:bg-pomegranate-500 dark:hover:bg-pomegranate-600 
                           text-white p-2 rounded-xl transition-colors duration-200 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           focus:outline-none focus:ring-2 focus:ring-pomegranate-500/50"
                aria-label="Enviar mensaje"
              >
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};