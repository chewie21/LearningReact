`use strict`

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

let command = [];

for (let i = 0; i < employers.length; i++) {
	if (employers[i].trim() != '') {
		employers[i] = employers[i].trim();
		employers[i] = employers[i][0].toUpperCase() + employers[i].slice(1).toLowerCase();
		command.push(employers[i]);
	}
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own = 0, arguments) => {
	let total = own;
	const everyCash = Array.prototype.slice.call(arguments);
	for (let i = 0; i < everyCash.length; i++) {
		total += +everyCash[i];
	}
	return total;
}

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	if(!teacher) teacher = `Максим`;
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
