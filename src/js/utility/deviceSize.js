export default function () {
    const deviceSize = {};

    deviceSize.mobile = window.innerWidth < 650;
    deviceSize.tablet = window.innerWidth >= 650 && window.innerWidth < 1200;
    deviceSize.tabletLate =
        window.innerWidth >= 768 && window.innerWidth < 1200;
    deviceSize.desktop = window.innerWidth >= 1200;

    return deviceSize;
}
