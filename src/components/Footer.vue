<template>
    <div>
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <a>Copyright By. Hellen</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'MyFooter'
}
</script>
<style>
.footer {
    background: whitesmoke;
    height: 70px;
    width: 100%;
    position: absolute;
    bottom: 0;
}
a {
    text-decoration: none;
    padding-top: 2%;
}
.footer__inner {
    display: flex;
    justify-content: center;
}
.footer__inner a {
    color: black;
    text-decoration: none;
}
</style>
