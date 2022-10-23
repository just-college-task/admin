import request from '@/utils/request'

export function getBannerList(size) {
    return request({
        url: `/api/banner/list/${size}`,
        method: 'get'
    })
}

export function setBannerList(data) {
    return request({
        url: `/api/admin/banner`,
        method: 'post',
        data
    })
}

export function uploadBanner(form) {
    //表单上传
}

export function deleteBanner(courseId) {
    return request({
        url: `/api/admin/banner?courseId=${courseId}`,
        method: 'delete'
    })
}