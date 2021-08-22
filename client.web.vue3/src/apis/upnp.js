/*
 * @Author: snltty
 * @Date: 2021-08-20 16:06:04
 * @LastEditors: snltty
 * @LastEditTime: 2021-08-20 17:17:31
 * @version: v1.0.0
 * @Descripttion: 功能说明
 * @FilePath: \client.web.vue3\src\apis\upnp.js
 */
import { sendWebsocketMsg } from "./request";

export const getUpnpDevices = () => {
    return sendWebsocketMsg(`upnp/devices`);
}
export const getUpnpMappings = (index) => {
    return sendWebsocketMsg(`upnp/mappings`, {
        DeviceIndex: index
    });
}

export const sendUpnpDelMapping = (deviceIndex, mappingIndex) => {
    return sendWebsocketMsg(`upnp/del`, {
        DeviceIndex: deviceIndex,
        MappingIndex: mappingIndex
    });
}
export const sendUpnpAddMapping = (model) => {
    return sendWebsocketMsg(`upnp/add`, model);
}