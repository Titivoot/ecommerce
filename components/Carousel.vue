<template>
    <div class="container-fluid">
        <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="https://static.titivoot.com/images/SSS1.webp" class="d-block w-100" alt="SSS1">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://static.titivoot.com/images/SSS2.webp" class="d-block w-100" alt="SSS2">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>