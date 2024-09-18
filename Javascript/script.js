document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar la hora actual
    const times = {
        button1: null,
        button2: null
        };
        function updateCurrentTime() {
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'America/Denver'
            };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            document.getElementById('currentTime').textContent = formatter.format(now);
        }
        function updateTimers() {
            const now = new Date();
            if (times.button1) {
              const elapsedTime1 = Math.floor((now - times.button1) / 1000); // Tiempo en segundos
                document.getElementById('timeDisplay1').textContent = `Tiempo desde el último clic: ${elapsedTime1} segundos`;
            }
            if (times.button2) {
              const elapsedTime2 = Math.floor((now - times.button2) / 1000); // Tiempo en segundos
                document.getElementById('timeDisplay2').textContent = `Tiempo desde el último clic: ${elapsedTime2} segundos`;
            }
            }
        
          // Actualiza la hora y los cronómetros cada segundo
            updateCurrentTime();
            setInterval(function() {
            updateCurrentTime();
            updateTimers();
            }, 1000);
        
    
    
    
  // Función para el primer botón
    document.getElementById('timeButton1').addEventListener('click', function() {
    times.button1 = new Date(); // Guardar el momento del clic
    const currentTime1 = times.button1.toLocaleString('en-US', { timeZone: 'America/Denver' });
    const listItem1 = document.createElement('li');
    listItem1.textContent = 'Connect attempt: ' + currentTime1;
    document.getElementById('timeList1').appendChild(listItem1);
    });

  // Función para el segundo botón
    document.getElementById('timeButton2').addEventListener('click', function() {
    times.button2 = new Date(); // Guardar el momento del clic
    const currentTime2 = times.button2.toLocaleString('en-US', { timeZone: 'America/Denver' });
    const listItem2 = document.createElement('li');
    listItem2.textContent = 'Client on/off hold: ' + currentTime2;
    document.getElementById('timeList2').appendChild(listItem2);
    });
    
    // Función para borrar los datos de ambas listas
    document.getElementById('clearButton').addEventListener('click', function() {
      document.getElementById('timeList1').innerHTML = ''; // Vaciar la lista de tiempos 1
      document.getElementById('timeList2').innerHTML = ''; // Vaciar la lista de tiempos 2
    });
    });