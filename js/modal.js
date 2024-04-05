const sendQuestionModal = document.getElementById("send-question-modal");
const sendQuestionTrigger = document.getElementById("send-question-trigger");

function preventTab(e) {
	if (e.key === "Tab") {
		e.preventDefault();
	}
};

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

// Установить валидатор на модалку и выполнить callback при успешной валидации
function setValidateOnModal(modal, callback) {
	const submitButton = modal.querySelector(".modal__submit");
	const nameInput = modal.querySelector(".modal__name");
	const emailInput = modal.querySelector(".modal__email");
	const telInput = modal.querySelector(".modal__tel");
	const textarea = modal.querySelector(".modal__textarea");

	submitButton.addEventListener("click", function (e) {
		e.preventDefault();

		if (nameInput && !nameInput.value) {
			nameInput.classList.add("error");
			return;
		}

		if (emailInput && !validateEmail(emailInput.value)) {
			emailInput.classList.add("error");
			return;
		}

		if (telInput && isNaN(+telInput.value) || !telInput.value) {
			telInput.classList.add("error");
			return;
		}

		if (textarea && !textarea.value) {
			textarea.classList.add("error");
			return;
		}

		modal.classList.remove("open");

		nameInput ? nameInput.value = "" : null;
		emailInput ? emailInput.value = "" : null;
		telInput ? telInput.value = "" : null;
		textarea ? textarea.value = "" : null;

		if (nameInput) nameInput.value = "";
		if (emailInput) emailInput.value = "";
		if (telInput) telInput.value = "";
		if (textarea) textarea.value = "";

		nameInput?.classList.remove("error");
		emailInput?.classList.remove("error");
		telInput?.classList.remove("error");
		textarea?.classList.remove("error");

		callback ? callback() : null;
	})
}

// Установить логику модальному окну
function setModal(modal, trigger) {
	if (trigger) {
		trigger.addEventListener("click", () => {
			modal.classList.add("open");
			body.classList.add("lock");
			document.addEventListener("keydown", preventTab)
		});
	}

	modal.addEventListener("click", e => {
		const closeButton = e.target.closest(".modal__close");
		const modalContent = e.target.closest(".modal__content");

		if (closeButton || !modalContent) {
			modal.classList.remove("open");
			body.classList.remove("lock");
			document.removeEventListener("keydown", preventTab);
		}

		const input = e.target.closest(".modal__input");

		if (input) {
			input.classList.remove("error");
		}
	});

};

// ------------------------------------------------------------

setModal(sendQuestionModal, sendQuestionTrigger);
setValidateOnModal(sendQuestionModal)
