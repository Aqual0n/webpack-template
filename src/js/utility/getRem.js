export default {
    rem: 12,
    setRemSize() {
        if (window.innerWidth >= 1200)
            this.rem = (window.innerWidth / 100) * (1200 / 1920);
        if (window.innerWidth >= 1920) this.rem = 19.2 * (1200 / 1920);
    },
    getRemsByPx(px) {
        return px / 12;
    },
    getPxByRems(rems) {
        this.setRemSize();
        return rems * this.rem;
    },
    getActualPx(px) {
        return this.getPxByRems(this.getRemsByPx(px));
    },
};
