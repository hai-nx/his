<template>
    <aside :class="{collapsed: isCollapsed}">
        <!--
            header
        -->
        <div class="sidebar-header">
            <div class="sidebar-brand">
                tmp_BRAND
            </div>
            <button class="sidebar-toggle" @click="sidebarToggle()">
                <i class="bi bi-list"></i>
            </button>
        </div>

        <!--
            items
        -->
        <ul class="nav-links">
            <li>
                <div class="icon-link">
                    <a href="#">
                        <router-link :to="{ name: 'dashboard' }">
                            <i class="bi bi-columns-gap"></i>
                            <span class="link-name">
                                Trang chủ
                            </span>
                        </router-link>
                    </a>
                </div>
                <ul class="sub-menu blank">
                    <li><a class="link-name" href="#">Trang chủ</a></li>
                </ul>
            </li>

            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="bi bi-collection"></i>
                        <span class="link-name">
                            Danh mục
                        </span>
                    </a>
                    <i class="bi bi-chevron-right arrow" @click="sidebarDropDown($event)"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link-name" href="#">Danh mục</a></li>
                    <li><a href="#"><router-link :to="{ name: 'role' }">Chi nhánh</router-link></a></li>
                    <li><a href="#"><router-link :to="{ name: 'role' }">Khoa</router-link></a></li>
                    <li><a href="#"><router-link :to="{ name: 'role' }">Phòng</router-link></a></li>
                    <li><a href="#"><router-link :to="{ name: 'role' }">Giường</router-link></a></li>
                </ul>
            </li>

            <li>
                <div class="icon-link">
                    <a href="#">
                        <i class="bi bi-gear"></i>
                        <span class="link-name">
                            Hệ thống
                        </span>
                    </a>
                    <i class="bi bi-chevron-right arrow" @click="sidebarDropDown($event)"></i>
                </div>
                <ul class="sub-menu">
                    <li><a class="link-name" href="#">Hệ thống</a></li>
                    <li><a href="#"><router-link :to="{ name: 'role' }">Vai trò</router-link></a></li>
                    <li><a href="#"><router-link :to="{ name: 'users' }">Người dùng</router-link></a></li>
                </ul>
            </li>

            <!--Cấu hình-->
            <li>
                <div class="icon-link">
                    <a href="#">
                        <router-link :to="{ name: 'setting' }">
                            <i class="bi bi-gear"></i>
                            <span class="link-name">Cấu hình</span>
                        </router-link>
                    </a>
                </div>
                <ul class="sub-menu blank">
                    <li><a class="link-name" href="#">Cấu hình</a></li>
                </ul>
            </li>

        </ul>
    </aside>
</template>

<script>
export default {
    name: "SideBar",
    data() {
        return {
            isCollapsed: false
        }
    },
    methods: {
        sidebarToggle() {
            this.sidebarToggleSubMenu('1111');

            this.isCollapsed = !this.isCollapsed;
        },
        sidebarToggleSubMenu(element) {
            // đóng các sub menu đang mở
            // nếu đưuọc gọi từ sự kiện đóng/mở sub menu thì không xử lý tại node đó.
            if (!this.isCollapsed) {
                var elements = document.getElementsByClassName("show-menu");
                for (let i = elements.length; i > 0; i--) {
                    var el = elements[i - 1];
                    if (el !== element) {
                        elements[i - 1].classList.remove("show-menu");
                    }
                }
            }
        },
        sidebarDropDown(e) {
            var arrowParent = e.target.parentElement.parentElement;
            this.sidebarToggleSubMenu(arrowParent);

            arrowParent.classList.toggle("show-menu")
        }
    },
}
</script>

<style scoped>

aside {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #182537; 
    color: #FFFFFF;
    width: 280px;

    transition: 0.3s ease;
    z-index: 999; /* đẩy lên trên những componenet khác */
}

aside .sidebar-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #263D53;
    min-height: 50px;
}

aside .sidebar-header .sidebar-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 20px;
    font-weight: 600;
    transition: 0.3s ease;
    transition-delay: 0.1s;
    width: 100%;
}

aside.collapsed .sidebar-header .sidebar-brand {
    display: none;
}

aside .sidebar-header .sidebar-toggle {
    /* width: 50px; */
    padding: 0px;
    background-color: transparent;
    color: #FFFFFF;
    border: none;
}

aside .sidebar-header .sidebar-toggle i {
    font-size: 20px;
    padding: 0px 15px;
}

aside .sidebar-header .sidebar-toggle:hover {
    background-color: #263D53;
    cursor: pointer;
}

.collapsed {
    width: 50px !important;
}

aside .nav-links {
    height: 100%;
    padding-top: 5px;
    padding-left: 0px;
    overflow: visible;
}

aside .nav-links::-webkit-scrollbar {
    display: none;
}

aside .nav-links li {
    position: relative;
    list-style: none;
}

aside .nav-links li.show-menu {
    background-color: #263D53;
}

aside .nav-links li:hover {
    background: #263D53;
    transition: all 0.4s ease;
}

aside .nav-links li .icon-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

aside.collapsed .nav-links li .icon-link {
    display: block;
}

aside .nav-links li i {
    height: 100%;
    /* width: 50px; */
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
}

aside .nav-links li.show-menu i.arrow {
    transform: rotate(90deg);
    
}

aside .nav-links li i.arrow {
    font-size: 13px;
}

aside.collapsed .nav-links i.arrow {
    display: none;
}

aside .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%; /*HAINX*/
}

aside .nav-links li a .link-name {
    /* font-size: 18px; */
    /* font-weight: 400; */
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    white-space:nowrap;
}

aside.collapsed .nav-links li a .link-name {
    opacity: 0;
    pointer-events: none;
    display: none;
}

aside .nav-links li .sub-menu {
    padding: 0px 0px 10px 50px;
    background-color: #263D53;
    display: none;
}

aside .nav-links li.show-menu .sub-menu {
    display: block;
    transition: all 0.3s ease;
}

aside.collapsed .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    margin-top: 0;
    padding: 10px 20px;
    transition: all 0.4s ease;
    opacity: 0;
    pointer-events: none;
    min-width: 200px;
}

aside.collapsed .nav-links li:hover .sub-menu {
    display: block;
    top: 0; 
    opacity: 1;
    pointer-events: auto;
}

aside .nav-links li .sub-menu a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
}

aside .nav-links li .sub-menu a:hover {
    opacity: 1;
}

aside .nav-links li .sub-menu .link-name {
    display: none;
}

aside.collapsed .nav-links li .sub-menu .link-name {
    /* font-size: 18px; */
    font-size: 15px;
    font-weight: 600;
    opacity: 1;
    display: block;
}

aside .nav-links li .sub-menu.blank {
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
    display: none;
}
aside .nav-links li:hover .sub-menu.blank {
    top: 50%;
    transform: translateY(-50%);
}

</style>