<script>
    import { PUBLIC_CAPTCHA_KEY } from '$env/static/public';
    import { onMount } from 'svelte';

    let hcaptchaWidgetID;
    onMount(() => {
        // @ts-ignore
        let hcaptcha = window.hcaptcha;
        if (hcaptcha.render) {
            hcaptchaWidgetID = hcaptcha.render('hcaptcha', { sitekey: PUBLIC_CAPTCHA_KEY });
        }
    });
</script>

<svelte:head>
    <script src="https://js.hcaptcha.com/1/api.js?render=explicit" async defer></script>
</svelte:head>

<div id="hcaptcha"/>
