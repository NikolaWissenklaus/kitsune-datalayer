console.log('%c [Kitsune] Init ', 'background: #ffffff; color: black; padding: 3px 8px; border-radius: 4px; font-weight: bold;');

//window.dataLayer = window.dataLayer || [];
const originalPush = window.dataLayer.push;

function printParamsTree(obj) {
    const styleKey = 'color: #4da6ff; font-weight: bold; font-size: 12px;';
    const styleString = 'color: #ff9966; font-size: 12px;';
    const styleNumber = 'color: #66ff66; font-size: 12px; font-weight: bold;';
    const styleOther = 'color: #ff4d4d; font-size: 12px; font-style: italic;'; 

    for (const key in obj) {
        const value = obj[key];

        if (Array.isArray(value)) {
            console.groupCollapsed(`%c 📂 Lista: ${key} (${value.length} itens)`, 'color: #a29bfe; font-weight: bold; font-size: 13px;');
            
            value.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    const itemName = item.item_name || item.name || item.id || `Item ${index}`;
                    console.groupCollapsed(`%c 🛍️ [${index}] ${itemName}`, 'color: #fdcb6e; font-size: 12px; font-weight: normal;');
                    printParamsTree(item); 
                    console.groupEnd();
                } else {
                    console.log(`%c[${index}]: %c${item}`, styleKey, styleString);
                }
            });
            console.groupEnd();
        } 
        else if (typeof value === 'object' && value !== null) {
            console.groupCollapsed(`%c 🧩 Objeto: ${key}`, 'color: #00cec9; font-weight: bold; font-size: 13px;');
            printParamsTree(value); 
            console.groupEnd();
        } 
        else {
            let valueStyle = styleString;
            let displayValue = `"${value}"`; 

            if (typeof value === 'number') {
                valueStyle = styleNumber;
                displayValue = value;
            } else if (value === null || value === undefined || typeof value === 'boolean') {
                valueStyle = styleOther;
                displayValue = String(value);
            }

            console.log(`%c ▪ ${key}: %c${displayValue}`, styleKey, valueStyle);
        }
    }
}

window.dataLayer.push = function (...args) {
    originalPush.apply(window.dataLayer, args); 
    
    const eventData = args[0];
    const eventName = eventData.event || 'push (Sem Nome)';
    const time = new Date().toLocaleTimeString(); 

    const styleTag = 'background: #111; color: #09ff00; padding: 4px 8px; border-radius: 4px; font-weight: bold; border: 1px solid #09ff00;';
    const styleTime = 'color: #888; font-style: italic; font-size: 11px; margin-left: 8px;';

    console.groupCollapsed(`%c 📥 kitsune_view: ${eventName} %c [${time}]`, styleTag, styleTime);
    printParamsTree(eventData);
    console.groupEnd();
};

//só pra ver o que já tem
function kitsune_agora() {
    console.log('%c 🗂️ Histórico Atual do DataLayer ', 'background: #ff9900; color: black; padding: 4px 8px; border-radius: 4px; font-weight: bold; margin-top: 10px;');
    
    window.dataLayer.forEach(function(e, index) {
        const eventName = e.event || 'push (Sem Nome)';
        const styleTag = 'background: #333; color: #ffcc00; padding: 3px 6px; border-radius: 4px; border: 1px solid #ffcc00; font-size: 11px;';
        
        console.groupCollapsed(`%c [${index}] kitsune_view: ${eventName}`, styleTag);
        printParamsTree(e);
        console.groupEnd();
    });
}

console.log('%c [Kitsune] Pronto! Tree View Ativada 🌲 ', 'background: #28a745; color: white; padding: 3px 8px; border-radius: 4px; font-weight: bold;');
