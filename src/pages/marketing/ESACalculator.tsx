// ================================================================
// ESA CALCULATOR - Interactive Benefits Calculator
// Shows families their total education benefits combining state ESA + federal ECCA
// ================================================================

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, CheckCircle, ArrowRight, Info } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

// State ESA data (2025)
const stateESAData: { [key: string]: { amount: number; name: string; eligible: boolean } } = {
  'AL': { amount: 7000, name: 'Alabama', eligible: true },
  'AZ': { amount: 7000, name: 'Arizona', eligible: true },
  'AR': { amount: 6600, name: 'Arkansas', eligible: true },
  'FL': { amount: 8000, name: 'Florida', eligible: true },
  'GA': { amount: 6500, name: 'Georgia', eligible: true },
  'ID': { amount: 6000, name: 'Idaho', eligible: true },
  'IN': { amount: 7500, name: 'Indiana', eligible: true },
  'IA': { amount: 7600, name: 'Iowa', eligible: true },
  'KS': { amount: 5000, name: 'Kansas', eligible: true },
  'LA': { amount: 5000, name: 'Louisiana', eligible: true },
  'MO': { amount: 6375, name: 'Missouri', eligible: true },
  'MT': { amount: 8000, name: 'Montana', eligible: true },
  'NE': { amount: 5000, name: 'Nebraska', eligible: true },
  'NH': { amount: 5255, name: 'New Hampshire', eligible: true },
  'NC': { amount: 7000, name: 'North Carolina', eligible: true },
  'OH': { amount: 8400, name: 'Ohio', eligible: true },
  'OK': { amount: 7500, name: 'Oklahoma', eligible: true },
  'SC': { amount: 6000, name: 'South Carolina', eligible: true },
  'TN': { amount: 7075, name: 'Tennessee', eligible: true },
  'TX': { amount: 8000, name: 'Texas', eligible: true },
  'UT': { amount: 8000, name: 'Utah', eligible: true },
  'WV': { amount: 4600, name: 'West Virginia', eligible: true },
  'WI': { amount: 4000, name: 'Wisconsin', eligible: true },
  'WY': { amount: 6000, name: 'Wyoming', eligible: true },
  // States without ESA programs yet
  'CA': { amount: 0, name: 'California', eligible: false },
  'NY': { amount: 0, name: 'New York', eligible: false },
  'IL': { amount: 0, name: 'Illinois', eligible: false },
  'PA': { amount: 0, name: 'Pennsylvania', eligible: false },
  'MI': { amount: 0, name: 'Michigan', eligible: false },
  'NJ': { amount: 0, name: 'New Jersey', eligible: false },
  'MA': { amount: 0, name: 'Massachusetts', eligible: false },
  'WA': { amount: 0, name: 'Washington', eligible: false },
  'CO': { amount: 0, name: 'Colorado', eligible: false },
  'OR': { amount: 0, name: 'Oregon', eligible: false },
  'NV': { amount: 0, name: 'Nevada', eligible: false },
  'NM': { amount: 0, name: 'New Mexico', eligible: false },
  'VA': { amount: 0, name: 'Virginia', eligible: false },
  'MD': { amount: 0, name: 'Maryland', eligible: false },
  'CT': { amount: 0, name: 'Connecticut', eligible: false },
  'DE': { amount: 0, name: 'Delaware', eligible: false },
  'RI': { amount: 0, name: 'Rhode Island', eligible: false },
  'VT': { amount: 0, name: 'Vermont', eligible: false },
  'ME': { amount: 0, name: 'Maine', eligible: false },
  'HI': { amount: 0, name: 'Hawaii', eligible: false },
  'AK': { amount: 0, name: 'Alaska', eligible: false },
  'KY': { amount: 0, name: 'Kentucky', eligible: false },
  'MS': { amount: 0, name: 'Mississippi', eligible: false },
  'ND': { amount: 0, name: 'North Dakota', eligible: false },
  'SD': { amount: 0, name: 'South Dakota', eligible: false },
  'MN': { amount: 0, name: 'Minnesota', eligible: false },
};

export const ESACalculator: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [numberOfChildren, setNumberOfChildren] = useState<number>(1);
  const [householdIncome, setHouseholdIncome] = useState<number>(75000);
  const [taxFilers, setTaxFilers] = useState<number>(2); // 1 or 2 for single/married
  const [calculation, setCalculation] = useState<any>(null);

  const pathfinityCostPerChild = 5000;
  const federalCreditPerFiler = 1700; // ECCA tax credit starting 2027

  useEffect(() => {
    if (selectedState) {
      calculateBenefits();
    }
  }, [selectedState, numberOfChildren, householdIncome, taxFilers]);

  const calculateBenefits = () => {
    const stateData = stateESAData[selectedState];
    if (!stateData) return;

    const stateESATotal = stateData.amount * numberOfChildren;
    const federalCreditTotal = federalCreditPerFiler * taxFilers;
    const totalBenefits = stateESATotal + federalCreditTotal;
    const pathfinityCost = pathfinityCostPerChild * numberOfChildren;
    const netBenefit = totalBenefits - pathfinityCost;

    // Traditional private school comparison
    const privateTuition = 25000 * numberOfChildren;
    const privateAfterBenefits = privateTuition - totalBenefits;
    const savings = privateAfterBenefits;

    setCalculation({
      state: stateData.name,
      stateESAPerChild: stateData.amount,
      stateESATotal,
      federalCreditTotal,
      totalBenefits,
      pathfinityCost,
      netBenefit,
      privateTuition,
      privateAfterBenefits,
      savings,
      eligible: stateData.eligible,
    });
  };

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="font-semibold">ESA + Federal Tax Credit Calculator</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Calculate Your Education Benefits
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how combining State ESA funds with Federal ECCA tax credits makes private school education essentially FREE through Pathfinity.ai
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Your Information
              </h2>

              {/* State Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Your State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Choose your state...</option>
                  {Object.entries(stateESAData)
                    .sort((a, b) => a[1].name.localeCompare(b[1].name))
                    .map(([code, data]) => (
                      <option key={code} value={code}>
                        {data.name} {data.eligible ? `(ESA: $${data.amount.toLocaleString()}/child)` : '(No ESA Yet)'}
                      </option>
                    ))}
                </select>
              </div>

              {/* Number of Children */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of School-Age Children
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={numberOfChildren}
                  onChange={(e) => setNumberOfChildren(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Household Income */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Annual Household Income
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    min="0"
                    step="5000"
                    value={householdIncome}
                    onChange={(e) => setHouseholdIncome(parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Federal ECCA requires income below 300% of county median (~$150k-250k for most areas)
                </p>
              </div>

              {/* Tax Filing Status */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tax Filing Status
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="1"
                      checked={taxFilers === 1}
                      onChange={(e) => setTaxFilers(1)}
                      className="mr-2 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Single ($1,700 federal credit)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="2"
                      checked={taxFilers === 2}
                      onChange={(e) => setTaxFilers(2)}
                      className="mr-2 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Married Filing Jointly ($3,400 federal credit)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div>
              {calculation ? (
                <div className="space-y-6">
                  {/* Summary Card */}
                  <div className={`rounded-2xl p-8 shadow-lg ${calculation.netBenefit >= 0 ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Your Benefits Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-600">
                        <span className="text-gray-600 dark:text-gray-300">State ESA ({calculation.state}):</span>
                        <span className="font-bold text-xl text-green-600">
                          ${calculation.stateESATotal.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-600">
                        <span className="text-gray-600 dark:text-gray-300">Federal ECCA Tax Credit:</span>
                        <span className="font-bold text-xl text-green-600">
                          ${calculation.federalCreditTotal.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300 dark:border-gray-500">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Total Benefits:</span>
                        <span className="font-bold text-2xl text-green-600">
                          ${calculation.totalBenefits.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between items-center pb-4">
                        <span className="text-gray-600 dark:text-gray-300">Pathfinity.ai Cost:</span>
                        <span className="font-semibold text-xl">
                          ${calculation.pathfinityCost.toLocaleString()}
                        </span>
                      </div>

                      <div className={`flex justify-between items-center pt-4 border-t-2 ${calculation.netBenefit >= 0 ? 'border-green-400' : 'border-gray-300'}`}>
                        <span className="font-bold text-lg text-gray-700 dark:text-gray-200">
                          Your Out-of-Pocket:
                        </span>
                        <div className="text-right">
                          <span className={`font-bold text-3xl ${calculation.netBenefit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ${calculation.netBenefit >= 0 ? '0' : Math.abs(calculation.netBenefit).toLocaleString()}
                          </span>
                          {calculation.netBenefit > 0 && (
                            <div className="text-sm text-green-600 mt-1">
                              Plus ${calculation.netBenefit.toLocaleString()} for supplies!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      vs. Traditional Private School
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Private School Tuition:</span>
                        <span className="font-semibold text-red-600">${calculation.privateTuition.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">After ESA + Tax Credit:</span>
                        <span className="font-semibold text-red-600">${calculation.privateAfterBenefits.toLocaleString()}</span>
                      </div>
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-700 dark:text-gray-200">You Save with Pathfinity:</span>
                          <span className="font-bold text-2xl text-green-600">${calculation.savings.toLocaleString()}/year</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Important Notes</h4>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                          <li>• Federal ECCA tax credit begins January 1, 2027</li>
                          <li>• State ESA amounts may vary based on eligibility</li>
                          <li>• Some states require prior public school enrollment</li>
                          <li>• Income limits apply for both programs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link
                      to="/waitlist"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <span>Join Waitlist - Lock in Your Savings</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    
                    <Link
                      to="/esa-guide"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span>Learn How to Apply for ESA</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Select Your State to Calculate Benefits
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enter your information to see how much you can save with Pathfinity.ai
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Understanding Your Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">State ESA Programs</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Education Savings Accounts provide state funds directly to families for educational expenses. Amounts vary by state from $4,000 to $8,400 per child.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💵</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Federal ECCA Credit</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Starting in 2027, the federal government offers up to $1,700 per taxpayer as a dollar-for-dollar tax credit for educational expenses.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Stack Your Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Families can use BOTH state ESA funds AND claim federal tax credits, making Pathfinity.ai essentially free or even profitable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default ESACalculator;