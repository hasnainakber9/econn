// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Accordion Logic ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });

    // --- Chart.js Logic ---
    const getChartOptions = (xLabel, yLabel, stacked = false) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            tooltip: { mode: 'index', intersect: false }
        },
        scales: {
            x: {
                title: { display: true, text: xLabel, font: { weight: 'bold' } },
                stacked: stacked
            },
            y: {
                title: { display: true, text: yLabel, font: { weight: 'bold' } },
                stacked: stacked
            }
        }
    });
    
    // --- NEW CHART (Section 1): PPF ---
    const ctxPPF = document.getElementById('ppfChart')?.getContext('2d');
    if (ctxPPF) {
        new Chart(ctxPPF, {
            type: 'line',
            data: {
                labels: [0, 20, 40, 60, 80, 100],
                datasets: [
                    {
                        label: 'PPF',
                        data: [
                            {x: 0, y: 100}, 
                            {x: 30, y: 95}, 
                            {x: 60, y: 80}, 
                            {x: 80, y: 50}, 
                            {x: 95, y: 0}
                        ],
                        borderColor: '#3b82f6',
                        backgroundColor: '#93c5fd',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Points',
                        type: 'scatter',
                        data: [
                            {x: 40, y: 70, label: 'A: Efficient'}, // Point A
                            {x: 80, y: 50, label: 'B: Efficient'}, // Point B
                            {x: 30, y: 40, label: 'C: Inefficient'}, // Point C
                            {x: 80, y: 90, label: 'D: Unattainable'} // Point D
                        ],
                        backgroundColor: ['#10b981', '#10b981', '#f59e0b', '#ef4444'],
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }
                ]
            },
            options: getChartOptions('AI Features (Units)', 'Mobile App (Units)')
        });
    }

    // --- NEW CHART (Section 1): PPF Shift ---
    const ctxPPFShift = document.getElementById('ppfShiftChart')?.getContext('2d');
    if (ctxPPFShift) {
        new Chart(ctxPPFShift, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Original PPF',
                        data: [
                            {x: 0, y: 100}, {x: 30, y: 95}, {x: 60, y: 80}, {x: 80, y: 50}, {x: 95, y: 0}
                        ],
                        borderColor: '#6b7280',
                        borderDash: [5, 5],
                        tension: 0.4
                    },
                    {
                        label: 'New PPF (After Innovation)',
                        data: [
                            {x: 0, y: 120}, {x: 40, y: 115}, {x: 70, y: 100}, {x: 90, y: 65}, {x: 110, y: 0}
                        ],
                        borderColor: '#10b981',
                        backgroundColor: '#6ee7b7',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: getChartOptions('AI Features (Units)', 'Mobile App (Units)')
        });
    }

    // --- NEW CHART (Section 2): Demand Shift ---
    const ctxDemandShift = document.getElementById('demandShiftChart')?.getContext('2d');
    if (ctxDemandShift) {
        new Chart(ctxDemandShift, {
            type: 'line',
            data: {
                labels: [10, 20, 30, 40, 50], // Price
                datasets: [
                    {
                        label: 'Supply',
                        data: [20, 40, 60, 80, 100],
                        borderColor: '#3b82f6',
                        tension: 0.1
                    },
                    {
                        label: 'Demand (D1)',
                        data: [100, 80, 60, 40, 20],
                        borderColor: '#6b7280',
                        borderDash: [5, 5],
                        tension: 0.1
                    },
                    {
                        label: 'Demand (D2 - Viral Hit)',
                        data: [120, 100, 80, 60, 40],
                        borderColor: '#ef4444',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Price ($)', 'Quantity')
        });
    }

    // --- NEW CHART (Section 3): Price Ceiling ---
    const ctxPriceCeiling = document.getElementById('priceCeilingChart')?.getContext('2d');
    if (ctxPriceCeiling) {
        new Chart(ctxPriceCeiling, {
            type: 'line',
            data: {
                labels: [10, 20, 30, 40, 50], // Price
                datasets: [
                    {
                        label: 'Demand (After Crisis)',
                        data: [120, 100, 80, 60, 40],
                        borderColor: '#ef4444',
                        tension: 0.1
                    },
                    {
                        label: 'Supply',
                        data: [20, 40, 60, 80, 100],
                        borderColor: '#3b82f6',
                        tension: 0.1
                    },
                    {
                        label: 'Price Ceiling',
                        data: [20, 20, 20, 20, 20],
                        borderColor: '#f59e0b',
                        borderDash: [10, 5],
                        pointRadius: 0
                    }
                ]
            },
            options: getChartOptions('Price ($)', 'Quantity (e.g., Water Bottles)')
        });
    }

    // --- NEW CHART (Section 4): Economic Profit ---
    const ctxEconProfit = document.getElementById('economicProfitChart')?.getContext('2d');
    if (ctxEconProfit) {
        new Chart(ctxEconProfit, {
            type: 'bar',
            data: {
                labels: ['Analysis (TR = $120,000)'],
                datasets: [
                    {
                        label: 'Explicit Costs',
                        data: [70000],
                        backgroundColor: '#3b82f6'
                    },
                    {
                        label: 'Accounting Profit',
                        data: [50000],
                        backgroundColor: '#93c5fd'
                    },
                    {
                        label: 'Implicit Costs',
                        data: [30000],
                        backgroundColor: '#f59e0b'
                    },
                    {
                        label: 'Economic Profit',
                        data: [20000],
                        backgroundColor: '#10b981'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    x: { stacked: true },
                    y: { stacked: true, title: { display: true, text: 'Amount ($)' } }
                }
            }
        });
    }

    // --- NEW CHART (Section 4): Total Costs ---
    const ctxTotalCost = document.getElementById('totalCostChart')?.getContext('2d');
    if (ctxTotalCost) {
        new Chart(ctxTotalCost, {
            type: 'line',
            data: {
                labels: [0, 1, 2, 3, 4, 5, 6], // Output
                datasets: [
                    {
                        label: 'Total Fixed Cost (TFC)',
                        data: [100, 100, 100, 100, 100, 100, 100],
                        borderColor: '#6b7280',
                        borderDash: [5, 5],
                        pointRadius: 0
                    },
                    {
                        label: 'Total Variable Cost (TVC)',
                        data: [0, 50, 90, 120, 160, 210, 280],
                        borderColor: '#f97316',
                        tension: 0.1
                    },
                    {
                        label: 'Total Cost (TC)',
                        data: [100, 150, 190, 220, 260, 310, 380],
                        borderColor: '#dc2626',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Output', 'Cost ($)')
        });
    }

    // --- Chart 5 (Original 1): Supply & Demand ---
    const ctx1 = document.getElementById('supplyDemandChart')?.getContext('2d');
    if (ctx1) {
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: [10, 20, 30, 40, 50], // Price
                datasets: [
                    {
                        label: 'Demand (Qd)',
                        data: [100, 80, 60, 40, 20],
                        borderColor: '#ef4444',
                        tension: 0.1
                    },
                    {
                        label: 'Supply (Qs)',
                        data: [20, 40, 60, 80, 100],
                        borderColor: '#3b82f6',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Price ($)', 'Quantity')
        });
    }

    // --- Chart 5b (Original 1b): Supply Shift ---
    const ctxShift = document.getElementById('supplyShiftChart')?.getContext('2d');
    if (ctxShift) {
        new Chart(ctxShift, {
            type: 'line',
            data: {
                labels: [10, 20, 30, 40, 50], // Price
                datasets: [
                    {
                        label: 'Demand',
                        data: [100, 80, 60, 40, 20],
                        borderColor: '#ef4444',
                        tension: 0.1
                    },
                    {
                        label: 'Supply (Original)',
                        data: [20, 40, 60, 80, 100],
                        borderColor: '#3b82f6',
                        borderDash: [5, 5],
                        tension: 0.1
                    },
                    {
                        label: 'Supply (After Subsidy)',
                        data: [40, 60, 80, 100, 120],
                        borderColor: '#10b981',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Price ($)', 'Quantity')
        });
    }
    
    // --- Chart 6 (Original 2): Production (MP/AP) ---
    const ctx2 = document.getElementById('productionChart')?.getContext('2d');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8], // Labor Units
                datasets: [
                    {
                        label: 'Marginal Product (MP)',
                        data: [15, 20, 25, 20, 15, 10, 5, 0],
                        borderColor: '#f59e0b',
                        tension: 0.1
                    },
                    {
                        label: 'Average Product (AP)',
                        data: [15, 17.5, 20, 20, 19, 17.5, 15.7, 13.8],
                        borderColor: '#10b981',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Units of Labor', 'Product')
        });
    }
    
    // --- Chart 7 (Original 3): Cost Curves ---
    const ctx3 = document.getElementById('costChart')?.getContext('2d');
    if (ctx3) {
        new Chart(ctx3, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7], // Output
                datasets: [
                    {
                        label: 'Marginal Cost (MC)',
                        data: [50, 40, 30, 40, 50, 70, 90],
                        borderColor: '#ef4444',
                        tension: 0.1
                    },
                    {
                        label: 'Average Variable Cost (AVC)',
                        data: [50, 45, 40, 40, 42, 46.7, 54.3],
                        borderColor: '#f59e0b',
                        tension: 0.1
                    },
                    {
                        label: 'Average Total Cost (ATC)',
                        data: [150, 95, 73.3, 65, 62, 63.4, 68.6],
                        borderColor: '#3b82f6',
                        tension: 0.1
                    },
                    {
                        label: 'Average Fixed Cost (AFC)',
                        data: [100, 50, 33.3, 25, 20, 16.7, 14.3],
                        borderColor: '#6b7280',
                        borderDash: [5, 5],
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Output', 'Cost per Unit ($)')
        });
    }

    // --- Chart 8 (Original 4): LRAC ---
    const ctx4 = document.getElementById('lracChart')?.getContext('2d');
    if (ctx4) {
        new Chart(ctx4, {
            type: 'line',
            data: {
                labels: [10, 20, 30, 40, 50, 60, 70, 80],
                datasets: [{
                    label: 'LRAC',
                    data: [100, 80, 65, 55, 55, 60, 70, 85],
                    borderColor: '#8b5cf6',
                    backgroundColor: '#ddd6fe',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: getChartOptions('Output', 'Long-Run Average Cost ($)')
        });
    }

    // --- Chart 9 (Original 5): Profit Maximization ---
    const ctx5 = document.getElementById('profitChart')?.getContext('2d');
    if (ctx5) {
        new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Output
                datasets: [
                    {
                        label: 'Total Revenue (TR)',
                        data: [0, 131, 262, 393, 524, 655, 786, 917, 1048, 1179, 1310],
                        borderColor: '#3b82f6',
                        tension: 0.1,
                        type: 'line'
                    },
                    {
                        label: 'Total Cost (TC)',
                        data: [100, 190, 270, 340, 400, 470, 550, 640, 750, 880, 1030],
                        borderColor: '#ef4444',
                        tension: 0.1,
                        type: 'line'
                    },
                    {
                        label: 'Profit',
                        data: [-100, -59, -8, 53, 124, 185, 236, 277, 298, 299, 280],
                        backgroundColor: (context) => {
                            const value = context.raw;
                            return value >= 0 ? '#10b981' : '#f43f5e';
                        },
                        order: 10
                    }
                ]
            },
            options: getChartOptions('Output', 'Total Amount ($)')
        });
    }

});
