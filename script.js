// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Accordion Logic ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the 'active' class on the header
            header.classList.toggle('active');

            // Get the content panel
            const content = header.nextElementSibling;

            // Toggle the 'active' class on the content
            content.classList.toggle('active');
        });
    });

    // --- Chart.js Logic ---
    // Helper function for Chart.js default options
    const getChartOptions = (xLabel, yLabel) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: xLabel,
                    font: { weight: 'bold' }
                }
            },
            y: {
                title: {
                    display: true,
                    text: yLabel,
                    font: { weight: 'bold' }
                }
            }
        }
    });
    
    // --- Chart 1: Supply & Demand ---
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
                        backgroundColor: '#fca5a5',
                        tension: 0.1
                    },
                    {
                        label: 'Supply (Qs)',
                        data: [20, 40, 60, 80, 100],
                        borderColor: '#3b82f6',
                        backgroundColor: '#93c5fd',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Price ($)', 'Quantity')
        });
    }

    // --- Chart 1b: Supply Shift ---
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
                        backgroundColor: '#fca5a5',
                        tension: 0.1
                    },
                    {
                        label: 'Supply (Original)',
                        data: [20, 40, 60, 80, 100],
                        borderColor: '#3b82f6',
                        backgroundColor: '#93c5fd',
                        borderDash: [5, 5],
                        tension: 0.1
                    },
                    {
                        label: 'Supply (After Subsidy)',
                        data: [40, 60, 80, 100, 120],
                        borderColor: '#10b981',
                        backgroundColor: '#6ee7b7',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Price ($)', 'Quantity')
        });
    }
    
    // --- Chart 2: Production (MP/AP) ---
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
                        backgroundColor: '#fcd34d',
                        tension: 0.1
                    },
                    {
                        label: 'Average Product (AP)',
                        data: [15, 17.5, 20, 20, 19, 17.5, 15.7, 13.8],
                        borderColor: '#10b981',
                        backgroundColor: '#6ee7b7',
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Units of Labor', 'Product')
        });
    }
    
    // --- Chart 3: Cost Curves ---
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
                        backgroundColor: '#fca5a5',
                        tension: 0.1
                    },
                    {
                        label: 'Average Variable Cost (AVC)',
                        data: [50, 45, 40, 40, 42, 46.7, 54.3],
                        borderColor: '#f59e0b',
                        backgroundColor: '#fcd34d',
                        tension: 0.1
                    },
                    {
                        label: 'Average Total Cost (ATC)',
                        data: [150, 95, 73.3, 65, 62, 63.4, 68.6],
                        borderColor: '#3b82f6',
                        backgroundColor: '#93c5fd',
                        tension: 0.1
                    },
                    {
                        label: 'Average Fixed Cost (AFC)',
                        data: [100, 50, 33.3, 25, 20, 16.7, 14.3],
                        borderColor: '#6b7280',
                        backgroundColor: '#d1d5db',
                        borderDash: [5, 5],
                        tension: 0.1
                    }
                ]
            },
            options: getChartOptions('Output', 'Cost per Unit ($)')
        });
    }

    // --- Chart 4: LRAC ---
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

    // --- Chart 5: Profit Maximization ---
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
                        backgroundColor: '#93c5fd',
                        tension: 0.1,
                        type: 'line' // This makes it a line chart
                    },
                    {
                        label: 'Total Cost (TC)',
                        data: [100, 190, 270, 340, 400, 470, 550, 640, 750, 880, 1030],
                        borderColor: '#ef4444',
                        backgroundColor: '#fca5a5',
                        tension: 0.1,
                        type: 'line' // This makes it a line chart
                    },
                    {
                        label: 'Profit',
                        data: [-100, -59, -8, 53, 124, 185, 236, 277, 298, 299, 280],
                        backgroundColor: (context) => {
                            const value = context.raw;
                            return value >= 0 ? '#10b981' : '#f43f5e'; // Green for profit, red for loss
                        },
                        order: 10 // Ensures bars are drawn "behind" the lines
                    }
                ]
            },
            options: getChartOptions('Output', 'Total Amount ($)')
        });
    }

});
