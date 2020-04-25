<template>
    <div class="main">
        <head-nav-bar title-value="企鹅辅导"></head-nav-bar>

        <div class="main-frame">
            <Row>
                <Col span="6">
                <Tooltip placement="right" content="选择需要查看的课程日期" style="width: 100%">
                    <DatePicker @on-change="handleDateChange" type="daterange" style="width: 100%" :value="selectedDate"
                                size="large" :start-date="new Date()" placeholder="Select date"></DatePicker>
                </Tooltip>
                </Col>
            </Row>
            <Row :gutter="16">
                <Col span="6" v-for="(c, i) in courseCount" :key="i" style="margin-top: 10px ">
                <Card :bordered="false">
                    <p slot="title">
                        <Icon type="ios-person-outline"></Icon>
                        {{getSubjectTitle(c.Subject)}}
                    </p>
                    <a href="#" @click="popClick(c.Subject)">
                        <h1 style="text-align: center">
                            {{c.Count}}
                        </h1>
                    </a>

                </Card>
                </Col>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Row>
        </div>

        <Modal v-model="popModalSwitch" fullscreen title="课程列表">
            <Table :columns="cols" :loading="tableLoading" :data="tableData"></Table>
        </Modal>

    </div>
</template>

<script>
    import HeadNavBar from './HeadNavBar'
    import util from '../util'
    import momment from 'moment'


    export default {
        methods: {
            popClick(subject) {
                this.tableLoading = true;
                this.getCourseList(subject);
                this.popModalSwitch = true
            },
            getCourseList(subject) {
                this.tableData = [];
                util.ajax({
                    url: '/course/detail',
                    method: 'get',
                    params: {subject: subject, beginTime: this.selectedDate[0], endTime: this.selectedDate[1]},
                }).then(response => {

                    var data = response.data.data;
                    for (var i = 0; i < data.length; i++) {

                        var line = {
                            Title: data[i].Title,
                            Csid: data[i].Csid,
                            TeacherName: data[i].Teacher.Name,
                            Desc: data[i].Teacher.Desc,
                            CourseName: data[i].CourseInfo.CourseName,
                            CoursePrice: data[i].CourseInfo.PreAmount / 100,
                        };

                        this.tableData.push(line);
                    }
                    this.tableLoading = false;
                }).catch(error => {//失败
                    console.log(error);
                    this.tableLoading = false
                });
            },
            getCourseCount() {
                util.ajax({
                    url: '/course/count',
                    method: 'get',
                    params: {beginTime: this.selectedDate[0], endTime: this.selectedDate[1]},
                }).then(response => {

                    var data = response.data.data;
                    this.courseCount = data
                    this.spinShow = false;
                }).catch(error => {//失败
                    console.log(error)
                    this.spinShow = false;
                });
            },
            handleDateChange(date) {
                this.spinShow = true;
                this.selectedDate = date
                this.getCourseCount()
            },
            getSubjectTitle(subject) {
                var subjMap = {
                    6e3: '全科',
                    6001: '语文',
                    6002: '数学',
                    6005: '英语',
                    6004: '物理',
                    6003: '化学',
                    6006: '生物',
                    6007: '政治',
                    6008: '历史',
                    6009: '地理',
                    6010: '讲座',
                    7057: '编程',
                    7058: '科学'
                };

                return subjMap[subject]
            },
        },
        data() {
            return {
                spinShow: false,
                tableLoading: false,
                selectedDate: [],
                courseCount: [],
                courseList: [],
                popModalSwitch: false,
                cols: [
                    {
                        title: '课程名',
                        key: 'Title'
                    },
                    {
                        title: '课程ID',
                        key: 'Csid'
                    },
                    {
                        title: '老师',
                        key: 'TeacherName'
                    },
                    {
                        title: '教师介绍',
                        key: 'Desc'
                    },
                    {
                        title: '所属班级',
                        key: 'CourseName'
                    },
                    {
                        title: '价格',
                        key: 'CoursePrice'
                    }
                ],
                tableData: []
            }
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
            HeadNavBar,
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
