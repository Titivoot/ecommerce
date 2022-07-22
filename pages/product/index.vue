<template>
    <div class="my-4">
        <Carousel />
        <div class="container-fluid">
            <div class="row my-3">
                <div class="col-md-2">
                    <NavLeft />
                </div>
                <div class="col-md-8">
                    <div class="product-header my-2 fs-4">
                        สินค้าทั้งหมด
                    </div>
                    <div class="row">
                        <div v-for="(n, index) in 10" :key="index" class="col-md-3 my-2">
                            <div class="card">
                                <a href="#" target="_blank">
                                    <img src="https://via.placeholder.com/250x308" class="card-img-top" />
                                </a>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="small"><a href="#!" class="text-muted">Category</a></p>
                                        <p class="small text-danger"><s>Real Price</s></p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="mb-0">Item Name</h5>
                                        <h5 class="text-dark mb-0">Dis Price</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-md-2">
                    <CartWidget />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-header {
    font-family: Prompt;
}
</style>