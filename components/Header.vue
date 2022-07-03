<template>
    <div id="Navbar" class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-end">
                    <NuxtLink class="header-link" activeClass="active" to="/login">เข้าสู่ระบบ</NuxtLink>
                    <span class="mx-2">|</span>
                    <NuxtLink class="header-link" activeClass="active" to="/register">สมัครสมาชิก</NuxtLink>
                </div>
            </div>
            <div class="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <NuxtLink class="navbar-brand" to="/">SSShop</NuxtLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" activeClass="active" to="/">หน้าแรก</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" activeClass="active" to="/product">สินค้า</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" activeClass="active" to="/about">เกี่ยวกับเรา</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" activeClass="active" to="/contact">ติดต่อเรา</NuxtLink>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" v-model="searchText" type="search" placeholder="สินค้าที่ต้องการค้นหา" aria-label="สินค้าที่ต้องการค้นหา">
                                <button class="btn btn-outline-success" @click.prevent="SearchData()">ค้นหา</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let searchText = ref('');

    const SearchData = (): void => {
        console.log(searchText.value);
    }
</script>

<style lang="scss" scoped>
#Navbar {
    font-family: Prompt;
    font-weight: 300;

    & .nav-link.active {
        font-weight: 600;
    }
}

.header-link {
    color: rgba(0, 0, 0, .55);
    text-decoration: none;

    &:hover {
        color: rgba(0, 0, 0, .7);
    }
    &.active {
        color: rgba(0, 0, 0, .9);
        font-weight: 600;
    }
}


</style>