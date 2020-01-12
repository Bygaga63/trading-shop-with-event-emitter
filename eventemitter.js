class EventEmitter {
    static events = {};

    static on(eventName, listener){
        if (!EventEmitter.events[eventName]){
            EventEmitter.events[eventName] = [];
        }
        EventEmitter.events[eventName].push(listener);
    }

    static emit(eventName, args){
        const listeners = EventEmitter.events[eventName] || [];
        listeners.forEach(listener => listener(args));
    }
}
