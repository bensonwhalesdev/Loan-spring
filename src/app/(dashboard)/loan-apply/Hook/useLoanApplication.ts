import { useEffect, useState } from 'react'
import { z } from 'zod'
import apiClient from '@/lib/apiClient'

export const loanApplicationSchema = z.object({
  creditScore: z.number().min(300).max(850),
  amountRequested: z.number().min(100),
  loanPurpose: z.string().min(3),
  employmentStatus: z.string().min(2),
  monthlyIncome: z.number().min(0),
  loanDuration: z.string(),
  repaymentPlan: z.string()
})

type Loan = {
  _id: string
  user: string
  creditScore: number
  amountRequested: number
  loanPurpose: string
  employmentStatus: string
  monthlyIncome: number
  loanDuration: string
  repaymentPlan: string
  approvedAmount?: number
  dueDate?: string
  status: 'pending' | 'approved' | 'rejected'
}

export const useLoanApplication = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [existingLoan, setExistingLoan] = useState<Loan | null>(null)

  const apply = async (data: z.infer<typeof loanApplicationSchema>) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await apiClient.post('/loans/apply', data)
      setSuccess(true)
      await fetchExistingLoan()
      return res.data
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const fetchExistingLoan = async () => {
    try {
      const res = await apiClient.get('/loans/user')
      const loans: Loan[] = res.data.loans
      const activeLoan = loans.find(
        (loan) => loan.status === 'pending' || loan.status === 'approved'
      )
      setExistingLoan(activeLoan || null)
    } catch (err) {
      console.error('Failed to fetch loans:', err)
    }
  }

  useEffect(() => {
    fetchExistingLoan()
  }, [])

  return { apply, loading, error, success, existingLoan }
}
