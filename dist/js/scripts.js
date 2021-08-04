function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}
helloConsole();



let subMenuMob3lvl = [...document.querySelectorAll('.catalog__submenu__item.has-sub3 > .catalog__submenu__link')];

subMenuMob3lvl.forEach((sub) => {
    sub.addEventListener('click', (e) => {
        e.preventDefault();
        sub.closest('.has-sub3').classList.add('active');
    });
});
let subMenusLink = [...document.querySelectorAll('.has-submenu > a')];

function subMenusOpeners() {
    if (!subMenusLink.length) {

    } else {
        subMenusLink.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.closest('.has-submenu').classList.add('active');
            })
        })
    }
}
subMenusOpeners();

$('.telephone__numbers').hover(
    function () {
        $('.telephones__hidden').addClass('active')
    },
    function () {
        $('.telephones__hidden').removeClass('active')
    }
);
$('.back__catalog').click( () => {
        $('.mobile__hidden').removeClass('open')
        $('.back__catalog').removeClass('opened')
        $('.close').removeClass('op');
        $('.close').removeClass('op2');
        if (document.querySelector('#column-left')) {
            $('aside#column-left').removeClass('mob-visible');

        }
}

)

if (window.innerWidth < 1024) {

    $('.mob-catalog-btn').click(
        // function(){ $('.catalog__menu').removeClass('hidden-menu') },
        function () {

        },
        function (e) {
            e.preventDefault();
            $('.mobile__hidden').addClass('open');
            $('.catalog__menu').toggleClass('act1');
            $('.catalog__menu').addClass('open');
            $('.catalog__menu').removeClass('act1');
            $('.close').addClass('op');
            $('.back__catalog').addClass('opened');
            console.log('helwww')
        },
        function () {

        },
        function () {

        }
    );

    let mobCatalogBtns = [...document.querySelectorAll('.mob-catalog-btn')];
    mobCatalogBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            $('.catalog__menu').addClass('open');
        })
    });


    [...document.querySelectorAll('.submenu3-back')].forEach((sb3) => {
        sb3.addEventListener('click', () => {
            sb3.closest('.has-sub3').classList.remove('active');
        })
    });
    [...document.querySelectorAll('.submenu-back')].forEach((sb2) => {
        sb2.addEventListener('click', () => {
            sb2.closest('.catalog__submenu__list').classList.remove('active');
        })
    })

    // $('.has-submenu > a').click(
    //     function (e) {
    //         e.preventDefault();
    //         $(this).closest('.has-submenu').addClass('active')
    //     }
    // );


    // $('.has-sub3').click(
    //     function () {
    //         $(this).find('.submenu3__list').addClass('active')
    //     },
    //     function () {
    //         $(this).find('.catalog__submenu__list').removeClass('active')
    //     }
    // );

    $('.menu-back').click(
        function () {
            $(this).closest('.catalog__menu').removeClass('open')
        },
        function () {
            $(this).closest('.catalog__menu').removeClass('act1')
            $(this).closest('.catalog__menu').removeClass('open')
        },
    );
    $('.submenu-back').click(
        function () {
            $(this).addClass('active')
        },
        function () {
            $(this).closest('.has-submenu').removeClass('active')
        }
    );
    $('.submenu3-back').click(
        function () {
            $(this).closest('.submenu3__list').removeClass('active')
        }
    );

}
else {
    $('#catalog-button, .catalog__menu').hover(
        function () {
            $('.back__catalog').addClass('opened')
        },
        function () {
            $('.back__catalog').removeClass('opened')
        }
    );
    $('#catalog-button:not(.mob-catalog-btn), .catalog__menu:not(.mob-catalog-btn)').hover(
        function () {
            $('.new').addClass('act')
            console.log('hello')

        },
        function () {
            $('.new').removeClass('act')
            console.log('hello')
        },

        function () {
            $('.catalog__menu').addClass('act1')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').removeClass('act1')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').removeClass('open')
            console.log('hello')
        }
    );

    $('.catalog__menu:not(.mob-catalog), #catalog-button:not(.mob-catalog)').hover(
        function () {
            $('.catalog__menu').removeClass('hidden-menu')
            console.log('hello')
        },

        function () {
            $('.catalog__menu').addClass('hidden-menu')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').addClass('act1')
            console.log('hello2')
        },
        function () {
            $('.catalog__menu').removeClass('act1')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').removeClass('open')
            console.log('hello')
        }
    );
}


$('.pr__slide').hover(
    function () {
        $('.pr__info-hover').addClass('active')
    },
    function () {
        $('.pr__info-hover').removeClass('active')
    }
);


let headerHeightFromLoad = $('header.mobile').outerHeight();
function checkHeaderPosition() {
    // console.log('started')
    if (window.innerWidth > 1023) {
        if ($(this).scrollTop() > $('header').height()) {
            $('header .bottom-line').addClass('fixed');
            $('main').css('padding-top', $('header .bottom-line').height());
            $('header .catalog__menu').addClass('new');
            if (!$('header .catalog__menu').hasClass('hidden-menu')) {

            } else {
                $('header .catalog__menu').addClass('hidden-menu');
            }

            // console.log($('header').height());
        } else {
            $('header .bottom-line').removeClass('fixed');
            $('header .catalog__menu').removeClass('new');
            if (!$('header .catalog__menu').hasClass('hidden-menu')) {

            } else {
                $('header .catalog__menu').addClass('hidden-menu');
            }
            $('main').css('padding-top', 0);
        }

    } else {
        // console.log(headerHeightFromLoad);
        // console.log($(this).scrollTop() + ' scroll')
        if ($(this).scrollTop() > headerHeightFromLoad) {
            $('header.mobile').addClass('fixed1');
            $('main').css('padding-top', headerHeightFromLoad);
        } else {
            $('header.mobile').removeClass('fixed1');
            $('main').css('padding-top', 0);
        }

    }
}
$(window).scroll(checkHeaderPosition);
checkHeaderPosition();

$('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    lazyLoad: 'ondemand',
    appendArrows: $('.appendArrows1'),
    appendDots: $('.appendDots1'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

$('.product-add').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    lazyLoad: 'ondemand',
    appendArrows: $('.appendArrowsAdd'),
    appendDots: false,
});


$('.product__slide1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows2'),
    settings: "unslick",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
          breakpoint: 1023,
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});



$('.product__slide2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows3'),
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

$('.product__slide3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows4'),
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

$('.product__slide4').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows5'),
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});
//
// $('.section__blog__row').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     fade: false,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: false,
//     variableWidth: true,
//     responsive: [
//         {
//             breakpoint: 1440,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 arrows: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 arrows: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 arrows: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
//
// });


// $('.mob_cat').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     fade: false,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: false,
//     responsive: [
//
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
//
// });

function checkWidthWindowSliders() {
    if (window.innerWidth < 1024) {

        $('.product__slide1').slick('unslick');
        $('.product__slide2').slick('unslick');
        $('.product__slide3').slick('unslick');
        $('.product__slide4').slick('unslick');
        // $('.section__blog__row').slick('unslick');




    } else {
        if (window.innerWidth > 1200) {
            // $('.section__blog__row').slick('unslick');
        }
    }
}
checkWidthWindowSliders();
// Mobile menu
$(document).ready(function () {

    $('.burger').click(function (event) {
        $('.mobile__hidden').toggleClass('open');
        $('.close').addClass('op');
        $('.back__catalog').addClass('opened');
        // $('.mob-catalog').addClass('opened');


    });

    $('.close').click(function (event) {
        $('.mobile__hidden').removeClass('open');
        $('.close').removeClass('op');
        $('.back__catalog').removeClass('opened');
        $('.mob-catalog').removeClass('opened');

        if (document.querySelector('#column-left')) {
            $('aside#column-left').removeClass('mob-visible');
            $('.close').removeClass('op2');

        }

    });

});

/* Открыть закрыть мобильный список */
$('.sub__parrent').hide();
$('.parrent').click(function () {
    $(this).find('.sub__parrent').slideToggle(300);
    $(this).find('.aft').toggleClass('minus');
});

/* Открыть закрыть частые ворпросы */
$('.info__hidden').hide();
$('.info__block').click(function () {
    $(this).siblings('.info__hidden').slideToggle(300);
    $(this).toggleClass('f__active');
});


$('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.thumb-slider',
    dots: false,
    arrows: false,
    infinite: true,
    dots: false,
    arrows: false,
});


$('.thumb-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    asNavFor: '.main-slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                vertical: false,
                asNavFor: false,
                infinite: false,
                verticalSwiping: false,
                variableWidth: false,
                appendDots: $('.appendDots1'),
                appendArrows: $('.appendArrowsThumb'),
            }
        }
    ]
});

$('.thumb-slider__item').click(function() {
    if(window.innerWidth > 768) {
        return false;
    }
});

$('.fancybox').fancybox();
$(document).ready(function() {
    if (document.querySelector('.sort-select')) {
        $('.sort-select').niceSelect();
    }

});

$('.filter-mob-btn').click(()=> {
    $('aside#column-left').addClass('mob-visible');
    $('.close').addClass('op');
    $('.close').addClass('op2');
    $('.back__catalog').addClass('opened');
})
$('.show-all-filter').click(()=> {
    $('aside#column-left').removeClass('mob-visible');
    $('.close').removeClass('op');
    $('.close').removeClass('op2');
    $('.back__catalog').removeClass('opened');
})


// Получаем нужный элемент
var elementBtns = document.querySelector('.product .product__features');

var Visible = function (target) {
    if (!elementBtns) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.product-banner-fix').classList.remove('visible');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.product-banner-fix').classList.add('visible');
        };
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    Visible (elementBtns);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (elementBtns);


$(".product-banner-fix__container .text ul li").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".tabs-section").offset().top - 30
    }, 200);
});
$(".brands-alphabet__item").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $(`.brands__letter[data-id='${this.dataset.id}']`).offset().top
    }, 200);
});

$(".product__features_head .rev__txt").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".tabs-section").offset().top,

    }, 200);
    $('#pills-rewiev-tab').click();
});


let liFixedHidden = [...document.querySelectorAll('.product-banner-fix__container .text ul li')];

function ifProdPage() {
    if (!liFixedHidden.length) {

    } else {
        let tabSectionBtn = [...document.querySelectorAll('.tabs-section .nav-link')];
        liFixedHidden.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (document.querySelector('.product-banner-fix__container .text ul li.active')) {
                    document.querySelector('.product-banner-fix__container .text ul li.active').classList.remove('active');
                }
                btn.classList.add('active');
                tabSectionBtn[k].click();
            })
        })
    }
}
ifProdPage();
$('.product__preview .actions-right a').click((e) => {
    e.preventDefault();
})


$('.prof-open-btn').click(()=> {
    $('.column-left__profile').toggleClass('opens');
})