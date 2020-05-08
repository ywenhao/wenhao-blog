import * as Icons from '@ant-design/icons'

export const GetIcons = (v) => {
  const icon = v.replace(v[0],v[0].toUpperCase()) + 'Outlined'
  return Icons[icon]
}
