// Days in the year


const yearDays = year => `${year} has ${(!(year % 100) && year % 400) || year % 4 ? '365' : '366' } days`


