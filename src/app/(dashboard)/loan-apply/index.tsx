'use client'
import { useState } from 'react'
import { useLoanApplication } from './Hook/useLoanApplication'
import { useRouter } from 'next/navigation'

export default function LoanApplicationPage() {
  const router = useRouter()
  const { apply, loading, error, success, existingLoan } = useLoanApplication()

  const [form, setForm] = useState({
    creditScore: '',
    amountRequested: '',
    loanPurpose: '',
    employmentStatus: '',
    monthlyIncome: '',
    loanDuration: '',
    repaymentPlan: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = Object.values(form).every(value => value !== '')
    if (!isValid) return alert('Please fill in all fields')

    const res = await apply({
      creditScore: Number(form.creditScore),
      amountRequested: Number(form.amountRequested),
      loanPurpose: form.loanPurpose,
      employmentStatus: form.employmentStatus,
      monthlyIncome: Number(form.monthlyIncome),
      loanDuration: form.loanDuration,
      repaymentPlan: form.repaymentPlan
    })

    if (res) router.push('/dashboard')
  }

  const inputClass = "w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-[#0A4860] focus:border-[#0A4860]"

  return (
    <div className="w-[80%] mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-[#0A4860]">Apply for a Loan</h2>

      {existingLoan && (
        <div className={`mb-6 p-4 rounded-md text-sm ${
          existingLoan.status === 'pending' ? 'bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800'
          : existingLoan.status === 'approved' ? 'bg-green-50 border-l-4 border-green-500 text-green-800'
          : 'bg-red-50 border-l-4 border-red-400 text-red-800'
        }`}>
          You already have a <strong>{existingLoan.status}</strong> loan application, An agent will contact you shortly.
          {existingLoan.status === 'approved' && existingLoan.approvedAmount && (
            <> Amount Approved: <strong>${existingLoan.approvedAmount}</strong>, Due: <strong>{new Date(existingLoan.dueDate!).toLocaleDateString()}</strong></>
          )}
        </div>
      )}

      {!existingLoan && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Credit Score */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Credit Score</label>
            <input
              name="creditScore"
              type="number"
              min={300}
              max={850}
              value={form.creditScore}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Amount Requested */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
            <input
              name="amountRequested"
              type="number"
              min={100}
              value={form.amountRequested}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Loan Purpose */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Purpose</label>
            <select name="loanPurpose" value={form.loanPurpose} onChange={handleChange} className={inputClass} required>
              <option value="">Select purpose</option>
              <option value="education">Education</option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
              <option value="medical">Medical</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Employment Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status</label>
            <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange} className={inputClass} required>
              <option value="">Select employment status</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
            <input
              name="monthlyIncome"
              type="number"
              min={0}
              value={form.monthlyIncome}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Loan Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Duration (months)</label>
            <input
              name="loanDuration"
              type="number"
              min={1}
              value={form.loanDuration}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Repayment Plan */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Repayment Plan</label>
            <select name="repaymentPlan" value={form.repaymentPlan} onChange={handleChange} className={inputClass} required>
              <option value="">Select repayment plan</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annually">Annually</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0A4860] hover:bg-[#09607d] text-white py-2 px-4 rounded-lg transition"
          >
            {loading ? 'Submitting...' : 'Apply'}
          </button>
        </form>
      )}

      {/* Feedback */}
      {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
      {success && !existingLoan && (
        <p className="text-sm text-green-600 mt-4">Application submitted successfully! An agent will contact you shortly. </p>
      )}
    </div>
  )
}
