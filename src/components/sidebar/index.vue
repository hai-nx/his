<template>
    <aside :class="`${ is_expanded && 'is-expanded' }`">
        <!--logo and toogle menu button-->
        <div class="sidebar-header">
            <button class="sidebar-header-toggle menu-toggle btn border-0" @click="onSidebarToggle()">
                <i class="bi bi-grid text-light"></i>
            </button>

            <!-- <div class="sidebar-header-logo">
                <img src="@/assets/logo.png" alt="logo">
            </div> -->
        </div>

        <!--menu items-->
        <nav class="sidebar-nav card py-2 mb-4">
            <ul class="nav flex-column accordion" id="accordionSidebar">
                <li class="nav-item">
                    <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" 
                        href="#" 
                        role="button" 
                        id="heading"
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapsetarget"
                        aria-expanded="true" 
                        aria-controls="collapsetarget"
                        >Hệ thống
                    </a>
                    <ul id="collapsetarget" 
                        class="collapse"
                        aria-labelledby="heading"
                        data-parent="#accordionSidebar">
                        <li><a class="dropdown-item text-primary" href="#">Vài trò và quyền hạn</a></li>
                        <li><a class="dropdown-item text-primary" href="#">Người dùng</a></li>
                        <hr class="sidebar-divider">
                        <li><a class="dropdown-item text-primary" href="#">Tùy chọn</a></li>
                    </ul>
                </li>



                <li class="nav-item has-submenu">
                    <a class="nav-link" href="#">Danh mục</a>
                    <ul class="submenu collapse">
                        <li><a class="nav-link" href="#">Submenu item 4 </a></li>
                        <li><a class="nav-link" href="#">Submenu item 5 </a></li>
                        <li><a class="nav-link" href="#">Submenu item 6 </a></li>
                        <li><a class="nav-link" href="#">Submenu item 7 </a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nghiệp vụ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Báo cáo</a>
                </li>
            </ul>
        </nav>
        

    </aside>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {
            is_expanded: true,
            items: [
                { labal: 'Dashborad' },
                { label: '', type:'sidebar-divider' },
                { 
                    label: 'HỆ thống',
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
            this.is_expanded = !this.is_expanded;
        }
    },
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: var(--his-sidebar-width-collapsed);
    min-height: 100vh;

    background-color: var(--his-sidebar-background-color);
    color: var(--his-sidebar-color);

    overflow: hidden;

    transition: 0.2s ease-out;
}

.is-expanded {
    width: var(--his-sidebar-width-expanded);
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    height: var(--his-sidebar-width-collapsed);
}

.sidebar-header-toggle {
    flex-shrink: 0;
    width: var(--his-sidebar-width-collapsed);
}

.sidebar-header-logo {
    height: 100%;
    width: 100%;
    padding: 5px;
    text-align: center;
}

.sidebar-header-logo > img {
    height: 100%;
}

.sidebar-nav {
    background-color: var(--his-sidebar-background-color);
    color: var(--his-sidebar-color);
}
</style>