import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'ru'],
	defaultLocale: 'en',
	pathnames: {
		"/about": {
			en: "/about",
			ru: "/о-компании"
		},
		"/conditions": {
			en: "/conditions",
			ru: "/условия"
		},
		"/contacts": {
			en: "/contacts",
			ru: "/контакты"
		},
		"/criteria-diler": {
			en: "/criteria-diler",
			ru: "/критерии-дилера"
		},
		"/criteria-instructor": {
			en: "/criteria-instructor",
			ru: "/критерии-инструктора"
		},
		"/dilers-form": {
			en: "/dilers-form",
			ru: "/форма-дилера"
		},
		"/galery": {
			en: "/galery",
			ru: "/галерея"
		},
		"/instructors": {
			en: "/instructors",
			ru: "/инструкторы"
		},
		"/instructors-form": {
			en: "/instructors-form",
			ru: "/форма-инструктора"
		},
		"/profile": {
			en: "/profile",
			ru: "/профиль"
		},
		"/cart": {
			en: "/cart",
			ru: "/корзина"
		},
		"/dealers": {
			en: "/dealers",
			ru: "/дилеры"
		},
		"/faq": {
			en: "/faq",
			ru: "/вопросы"
		},
		"/quick-order": {
			en: "/quick-order",
			ru: "/быстрый-заказ"
		},
		"/shop/feeto-care": {
			en: "/shop/feeto-care",
			ru: "/магазин/уход-за-ногами"
		},
		"/shop/professional-feet": {
			en: "/shop/professional-feet",
			ru: "/магазин/профессиональный-уход"
		}
	}
});
