import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

// Настройка Serial Port
const serialPort = new SerialPort({
  path: 'COM5', // Укажите правильный COM-порт
  baudRate: 9600, // Скорость передачи данных
});

const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }));

// Обработка открытия порта
serialPort.on('open', () => {
  console.log('Serial Port открыт');
});

// Обработка ошибок порта
serialPort.on('error', (err) => {
  console.error('Ошибка Serial Port:', err.message);
});

// Чтение данных из порта
parser.on('data', (data) => {
  console.log(`Получены сырые данные: "${data}"`);

  const rawData = data.trim();
  if (!rawData) {
    console.log('Пустые данные, пропускаем...');
    return;
  }

  console.log(`Обработанные данные: ${rawData}`);

  // Преобразование строки в массив чисел
  const dataArray = rawData.split(' ').map(Number);
  console.log(`Массив данных:`, dataArray);

  // Здесь можно добавить логику для сохранения данных в файл или другую обработку
});