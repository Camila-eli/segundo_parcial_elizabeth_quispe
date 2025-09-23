import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  // Solicitar permiso para notificaciones
  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.log('Este navegador no soporta notificaciones');
      return false;
    }
    
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  // Mostrar notificación
  showNotification(title: string, options?: NotificationOptions): void {
    if (Notification.permission !== 'granted') {
      console.log('Permiso para notificaciones no concedido');
      return;
    }
    
    new Notification(title, options);
  }
}