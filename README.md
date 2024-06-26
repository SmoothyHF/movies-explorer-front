# movies-explorer-frontend
## Фронтенд часть приложения по поиску фильмов.

* [О Приложении](#about)
* [Настройка](#setup)
* [Доступные адресы](#paths)

---

<h2 name="about">О приложении</h2>

* Приложение создано как дипломный проект на курсе Junior Web-developer от Яндекс Практикум. Сайт адаптирован под разные разрешения экрана. Реализована регистрация и авторизация пользователя, поиск фильмов по ключевым словам или категории, также есть возможность просмотреть трейлер фильма на YouTube и добавить фильм в закладки.


---

<h2 name="setup">Настройка</h2>

0. Для полной работы приложения необходимо запустить [бэкенд](https://github.com/SmoothyHF/movies-explorer-api). Без него вы сможете просмотреть только домашнюю страницу.

1. Клонировать репозиторий

    ```bash
    git clone https://github.com/SmoothyHF/movies-explorer-front.git
    ```

2. Установить зависимости

    ```bash
    npm i
    ```

3. Запустить виртуальный сервер

    ```bash
    npm start
    ```

4. Вы превосходны!

---

<h2 name="paths">Доступные адресы</h2>

* **`/` - Домашная страница приложения. На ней можно узнать информацию о проекте и обо мне.**

  ![Домашная страница](https://imgur.com/JVQRoEN.png)

* **`/sign-up` - Регистрация нового пользователя.**

  ![Регистрация](https://imgur.com/1YpxGww.png)

* **`/sign-in` - Вход в созданный аккаунт.**

  ![Авторизация](https://imgur.com/jchUQ08.png)

* **`/profile` - Личный кабинет. Здесь можно увидеть и изменить информацию о пользователе или выйти из аккаунта.**

  ![Личный кабинет](https://imgur.com/TDxYSCj.png)

* **`/movies` - Фильмы. Здесь происходит поиск фильмов.**

  ![Фильмы](https://imgur.com/A09eY1Y.png)

* **`/saved-movies` - Сохраненые фильмы. Здесь пользователь может посмотреть фильмы, которые, он сохранил.**

  ![Сохраненые фильмы](https://imgur.com/UweGWmQ.png)
