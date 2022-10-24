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
    return request({
        url: '/api/admin/banner/upload',
        method: 'post',
        data: form,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
}

export function deleteBanner(courseId) {
    return request({
        url: `/api/admin/banner?courseId=${courseId}`,
        method: 'delete'
    })
}