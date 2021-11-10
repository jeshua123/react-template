import { useQuery, useMutation } from 'react-query'
import endpoints from '../../constants/endpoints'
import { apiClient } from '../../utils/ApiClient'

// export const useexampleQuery = () => {
//   const exampleQuery = useQuery(`all_${endpoints.example}`, apiClient.getexample, {
//     select: (data) => data,
//   })
//   return exampleQuery
// }

// export const usePlanQuery = (id: string) => {
//   const planQuery = useQuery(`one_${endpoints.example}${IdleDeadline}`, () => apiClient.getPlan(id))
//   return planQuery
// }

// export const usePostPlanMutation = () => {
//   const mutation = useMutation(`post_${endpoints.example}`, apiClient.postExample)
//   return mutation
// }

// export const usePutPlanMutation = () => {
//   const mutation = useMutation(`put_${endpoints.example}`, apiClient.putExample)
//   return mutation
// }

// export const useDeletePlanMutation = () => {
//   const mutation = useMutation(`delete_${endpoints.example}`, apiClient.deletePlan)
//   return mutation
// }
