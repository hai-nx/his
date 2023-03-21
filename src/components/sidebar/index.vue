<template>
    <aside class="sidebar" :class="{ close: is_close }">
        <div class="sidebar-header">
            <div class="sidebar-header-logo">
                <span>HIS</span>
            </div>

            <button class="sidebar-header-toggle" @click="onSidebarToggle()">
                <i class="bi bi-list"></i>
            </button>
        </div>

        <ul class="nav-links">
            <li>
                <a href="#">
                    <i class="bi bi-columns-gap"></i>
                    <span class="link-name">
                        Dashborad
                    </span>
                </a>
                <ul class="sub-menu blank">
                    <li><a class="link-name" href="#">Dashborad</a></li>
                </ul>
            </li>
            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="bi bi-collection"></i>
                        <span class="link-name">
                            Dictionary
                        </span>
                    </a>
                    <i class="bi bi-chevron-down arrow" @click="handleDropDown($event)"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link-name" href="#">Dictionary</a></li>
                    <li><a href="#">Sub 1</a></li>
                    <li><a href="#">Sub 2</a></li>
                    <li><a href="#">Sub 3</a></li>
                </ul>
            </li>
            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="bi bi-collection"></i>
                        <span class="link-name">
                            Report
                        </span>
                    </a>
                    <i class="bi bi-chevron-down arrow" @click="handleDropDown($event)"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link-name" href="#">Report</a></li>
                    <li><a href="#">Sub 1</a></li>
                    <li><a href="#">Sub 2</a></li>
                    <li><a href="#">Sub 3</a></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {
            is_close: false,

            items: [
                { labal: 'Dashborad' },
                { label: '', type:'sidebar-divider' },
                { 
                    label: 'Hệ thống',
                    children: [
                        { label: 'Vai trò và quyền hạn' },
                        { label: 'Người dùng' },
                        { label: '', type:'sidebar-divider' },
                        { label: 'Tùy chọn' },
                    ]
                }
            ]
        }
    },

    methods: {
        onSidebarToggle() {
            this.is_close = !this.is_close;
        },
        handleDropDown(e) {
            var arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("show-menu")
        }
    },
}
</script>

<style scoped>
aside {
    --his-sidebar-width-collapse: 50px;
    --his-sidebar-width-expanded: 280px;
    --his-sidebar-header-height: 50px;
}

.close {
    width: var(--his-sidebar-width-collapse) !important;
}

.sidebar-header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 0.3s ease;
    transition-delay: 0.1s;
}

.sidebar-header-toggle {
    border: 0;
    width: var(--his-sidebar-width-collapse);
}

.sidebar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
    transition: 0.2s ease-out;
    width: var(--his-sidebar-width-expanded)
}

.sidebar-header {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
    height: var(--his-sidebar-header-height);
}

.close .sidebar-header-logo {
    display: none;
    font-size: 25px;
    transition-delay: 0s;
}

.sidebar-header-toggle :hover {
    cursor: pointer;
}

ul {
    padding-left: 0px;
}

.sidebar .nav-links {
    background: rebeccapurple;
    height: 100%;
    padding-top: 30px;
    padding-left: 0px;
    overflow: auto;
}

.sidebar .nav-links {
    overflow: visible;
}


.sidebar .nav-links::-webkit-scrollbar {
    display: none;
}

.sidebar .nav-links li {
    position: relative;
    list-style: none;
}

.sidebar .nav-links li {
    position: relative;
    list-style: none;
}

.sidebar .nav-links li:hover {
    background: red;
    transition: all 0.4s ease;
}

.sidebar .nav-links li .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sidebar.close .nav-links li .icon-link {
    display: block;
}

.sidebar .nav-links li i {
    height: 50px;
    width: var(--his-sidebar-width-collapse);
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.sidebar .nav-links li.show-menu i.arrow {
    transform: rotate(-180deg);
}

.sidebar.close .nav-links i.arrow {
    display: none;
}

.sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.sidebar .nav-links li a .link-name {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
}

.sidebar.close .nav-links li a .link-name {
    opacity: 0;
    pointer-events: none;
    display: none;
}


.sidebar .nav-links li .sub-menu {
    padding: 6px 6px 14px 50px;
    margin-top: -10px;
    background-color: cadetblue;
    display: none;
}
.sidebar .nav-links li.show-menu .sub-menu {
    display: block;
}
.sidebar.close .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    top: -10px;
    margin-top: 0;
    padding: 10px 20px;
    transition: all 0.4s ease;
    opacity: 0;
    pointer-events: none;
}
.sidebar.close .nav-links li:hover .sub-menu {
    top: 0;
    opacity: 1;
    pointer-events: auto;
    display: block;
}

.sidebar .nav-links li .sub-menu a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
}


.sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
}



.sidebar .nav-links li .sub-menu .link-name {
    display: none;
}
.sidebar.close .nav-links li .sub-menu .link-name {
    font-size: 18px;
    opacity: 1;
    display: block;
}

.sidebar .nav-links li .sub-menu.blank {
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank {
    top: 50%;
    transform: translateY(-50%);
}
</style>