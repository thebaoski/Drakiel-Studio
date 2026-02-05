/**
 * KONFIGURACJA BLOKAD TERMINÓW
 * Tutaj zarządzasz dostępnością studia.
 */

// 1. Dni całkowicie wyłączone z rezerwacji (format: RRRR-MM-DD)
const ZABLOKOWANE_DATY = [
    '2026-02-14', 
    '2026-03-07',
    '2026-12-24',
    '2026-12-25'
];

// 2. Konkretne godziny zablokowane w danym dniu
// Format: 'DATA': ['GODZINA', 'GODZINA']
const ZABLOKOWANE_GODZINY = {
    '02.03.2026': ['18:00', '19:00', '20:00', '21:00', '22:00'],
    '04.03.2026': ['18:00', '19:00', '20:00'],
    '09.03.2026': ['18:00', '19:00', '20:00', '21:00', '22:00']
};