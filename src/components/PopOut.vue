<template>
    <div >
        <Table :columns="cols" :data="data9"></Table>
    </div>
</template>

<script>
    import util from '../util'
    import momment from 'moment'


    export default {
        methods: {
            getCourseCount() {
                util.ajax({
                    url: '/course/count',
                    method: 'get',
                    params: {beginTime: this.selectedDate[0], endTime: this.selectedDate[1]},
                }).then(response => {

                    var data = response.data.data;
                    this.courseCount = data
                }).catch(error => {//失败
                    console.log(error)
                });
            },
            handleDateChange(date) {
                this.selectedDate = date
                this.getCourseCount()
            },
            getSubjectTitle(subject) {
                var subjMap = {
                    6e3: "全科",
                    6001: "语文",
                    6002: "数学",
                    6005: "英语",
                    6004: "物理",
                    6003: "化学",
                    6006: "生物",
                    6007: "政治",
                    6008: "历史",
                    6009: "地理",
                    6010: "讲座",
                    7057: "编程",
                    7058: "科学"
                };

                return subjMap[subject]
            },
        },
        data() {
            return {
                selectedDate: [],
                courseCount: [],
                cols: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Job',
                        key: 'job'
                    },
                    {
                        title: 'Music',
                        key: 'music'
                    },
                    {
                        title: 'Movie',
                        key: 'movie'
                    },
                    {
                        title: 'Book',
                        key: 'book'
                    }
                ],
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        job: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        job: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        job: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    }
                ]
            }
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
        },
        mounted() {
            this.selectedDate = [momment().format('YYYY-MM-DD'), momment().add(1, 'days').format('YYYY-MM-DD')]

            this.getCourseCount()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
