INSTRUCCIONES DE USO - SISTEMA AUTOMÁTICO

1. ESTRUCTURA DE ARCHIVOS:
   - dashboard.html: Panel de control principal (abrir en navegador)
   - datos.csv: Datos históricos de los 10 indicadores
   - auto-update.js: Script de actualización automática
   - config.json: Configuración de umbrales y alertas

2. ACTUALIZACIÓN AUTOMÁTICA:
   El sistema se actualiza automáticamente 4 veces al día:
   - Horarios: 08:00, 12:00, 16:00 y 20:00 (hora local)
   - No requiere intervención manual
   - Para activar/desactivar: config.json -> "autoupdate.active"

3. PANEL DE CONTROL:
   - Abrir dashboard.html en cualquier navegador
   - Se actualiza automáticamente cada 4 horas
   - Puede desactivar la recarga automática en el switch superior

4. DATOS EN TIEMPO REAL:
   - El panel muestra la última actualización
   - Contador para la próxima actualización
   - Estado global del mercado basado en los 10 indicadores

CARACTERÍSTICAS PRINCIPALES:
✅ 10 indicadores completos de Bitcoin
✅ Actualización automática 4x/día
✅ Diseño profesional responsive
✅ Gráficos interactivos históricos
✅ Sistema de alertas visuales
✅ Sin dependencias externas
✅ Configuración sencilla

PARA IMPLEMENTAR DATOS REALES:
1. Reemplace la función simulateDataUpdate() en auto-update.js
2. Conéctese a APIs reales de indicadores de Bitcoin
3. Actualice datos.csv con la información real

NOTA: La versión actual usa datos simulados para demostración.