new Vue({
    el: "#app",
    data() {
        return {
            isOpenedTop: true,
            items: [
                {
                    img1: "images/couple-1.jpg",
                    img2: "images/couple-2.jpg",
                    img3: "images/couple-3.jpg",
                    title: "COUPLE",
                    isOpen: false,
                },
                {
                    img1: "images/cute-2.jpg",
                    img2: "images/cute-1.jpg",
                    img3: "images/cute-3.jpg",
                    title: "CUTE",
                    isOpen: false,
                },
                {
                    img1: "images/baby-1.jpg",
                    img2: "images/baby-2.jpg",
                    img3: "images/baby-3.jpg",
                    title: "INDESCRIBABLE",
                    isOpen: false,
                },
                {
                    img1: "images/b-1.jpg",
                    img2: "images/b-2.jpg",
                    img3: "images/b-3.jpg",
                    title: "BEAUTIFUL",
                    isOpen: false,
                },
                {
                    img1: "images/girl-3.jpg",
                    img2: "images/girl-2.jpg",
                    img3: "images/girl-1.jpg",
                    title: "MY-GIRL",
                    isOpen: false,
                },
            ],
        };
    },
    methods: {
        topOpen() {
            this.isOpenedTop = !this.isOpenedTop;
        },

        open(idx, isOpen) {
            if (this.isOpenedTop) {
                this.items[idx].isOpen = !isOpen;
            }
        },

        reset() {
            this.items.forEach((item) => (item.isOpen = false));
            this.isOpenedTop = false;
        },
    },
});