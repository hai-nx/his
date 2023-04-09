<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <!-- <router-link :to="{ name: 'system' }">
                    Danh mục
                </router-link> -->
                <h2>Danh sách bệnh nhân đã đăng ký</h2>
            </div>

            <div>
                <a-button type="primary">
                    <template #icon>
                        <i class="bi bi-plus-lg"></i>
                    </template>
                    Đăng ký khám
                </a-button>

                <!-- <button class="btn btn-sm btn-primary rounded-1 px-4" @click="onAddNew()">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm chi nhánh</span>
                </button> -->
            </div>
        </div>

        <a-table :dataSource="dataSource" :columns="columns">

        </a-table>
    </div>

</template>

<script>
export default {
    data() {
        return {
            dataSource: [ 
                {
                    key: '1',
                    name: 'Mike',
                    age: 32,
                    address: '10 Downing Street',
                },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
        ],

        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
        ],
        }
    }
}
</script>

<style>
    
</style>