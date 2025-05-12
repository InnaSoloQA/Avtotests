describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');// зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и орн виден для пользователя
           })

           it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');// зашла на сайт
         cy.get('#forgotEmailButton').click(); // Нажала востановить пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления
         cy.get('#restoreEmailButton').click(); // Нажала отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и орн виден для пользователя
           })


           it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');// зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLove12345'); // Ввела неверный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и орн виден для пользователя
           })


           it('Верный пароль и неверный логин', function () {
         cy.visit('https://login.qa.studio/');// зашла на сайт
         cy.get('#mail').type('german@inna.ru'); // Ввела неверный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и орн виден для пользователя
           })

            it('Негативный кейс валидации, логин без @', function () {
         cy.visit('https://login.qa.studio/');// зашла на сайт
         cy.get('#mail').type('germandolnikov.ru'); // Ввела неверный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и орн виден для пользователя
           })

           
   it('Строчные буквы в логине', function () {
         cy.visit('https://login.qa.studio/');// зашла на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и орн виден для пользователя
           })
})