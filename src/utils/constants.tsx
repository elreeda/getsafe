import { ProductIds } from '../types/product'
import AgeStep from '../components/Buyflow/steps/AgeStep'
import EmailStep from '../components/Buyflow/steps/EmailStep'
import FullnameStep from '../components/Buyflow/steps/FullnameStep'

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}

export const PRODUCT_FLOWS = {
  [ProductIds.devIns]: [EmailStep, AgeStep],
  [ProductIds.designerIns]: [EmailStep, AgeStep, FullnameStep],
}
