const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const clearBtn = document.getElementById('clear-btn');
const errorMessage = document.getElementById('error-message');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Error : Cannot go below 0';
        errorMessage.style.color = "red";
    }
});

clearBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    clearBtn.style.display = 'none';
    errorMessage.textContent = '';
});

function updateDisplay() {
    countDisplay.textContent = `Your Current Count is :${count}`;
    if (count === 0) {
        clearBtn.style.display = 'none';
    } else {
        clearBtn.style.display = 'inline-block';
        clearBtn.style.backgroundColor = 'black';
        clearBtn.style.color = 'white';
        clearBtn.style.borderColor = 'white';
    }
}

updateDisplay();
