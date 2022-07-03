<template>
    <div id="Footer" class="container-fluid">
        <footer class="py-4 my-4">
            <ul class="nav justify-content-center border-bottom pb-4 mb-4">
                <li class="nav-link"><NuxtLink class="nav-link" activeClass="active" to="/">หน้าแรก</NuxtLink></li>
                <li class="nav-link"><NuxtLink class="nav-link" activeClass="active" to="/product">สินค้า</NuxtLink></li>
                <li class="nav-link"><NuxtLink class="nav-link" activeClass="active" to="/about">เกี่ยวกับเรา</NuxtLink></li>
                <li class="nav-link"><NuxtLink class="nav-link" activeClass="active" to="/contact">ติดต่อเรา</NuxtLink></li>
            </ul>
            <p class="text-center text-muted createby">Create by <a href="https://www.titivoot.com/" target="_blank" rel="noopener noreferrer">Titivoot Pangrit</a></p>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
#Footer {
    font-family: Prompt;
    font-weight: 300;

    & .nav-link {
        color: rgba(0, 0, 0, .55);
        text-decoration: none;
    }
    & .nav-link:hover {
        color: rgba(0, 0, 0, .7);
    }
    & .nav-link:active {
        color: rgba(0, 0, 0, .9);
        font-weight: 600;
    }
    & .nav-link.active {
        color: rgba(0, 0, 0, .9);
        font-weight: 600;
    }
}

.createby {
    font-size: 12px;
    & a {
        text-decoration: none;
        font-weight: bold;
        color: rgba(0, 0, 0, .55);
    }
}
</style>