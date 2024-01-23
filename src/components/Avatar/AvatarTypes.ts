import { GetValuesEnum } from '../PoluiProvider/enums'

export enum AvatarStatusEnum {
  away = 'away',
  busy = 'busy',
  offline = 'offline',
  online = 'online',
}

export type AvatarStatusType = Record<GetValuesEnum<typeof AvatarStatusEnum>, string>

/**
 * @name AvatarStatus
 * @description Avatar status types for indicating user status
 * @author Pol Gubau - https://github.com/polgubau
 */
export interface AvatarStatus extends AvatarStatusType {
  [key: string]: string
}