// TODO: 이 곳에 정답 코드를 작성해주세요.

const $id = document.getElementById('id')
const $pw = document.getElementById('pw')
const $form = document.querySelector('form')
const $dialog = document.querySelector('dialog')
const $uiControlBtn = document.querySelector('#font-control-box')
//give focus when page loaded
window.addEventListener('load', () => {
    document.body.style.fontSize = '16px'
    $id.focus()
})

//check validation when focusout
$form.addEventListener('focusout', (e) => {
    if (e.target.id !== 'submit') {
        const targetId = e.target.id
        const targetValue = e.target.value
        $form.querySelector(`#${targetId}-msg`).innerHTML =
            e.target.value === ''
                ? '필수 정보입니다.'
                : checkValidation(targetId, targetValue)
    }
})

//when sumbit , check validation and show dialog
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    let checkMsg = true
    e.target.querySelectorAll('[id$="-msg"]').forEach((msg) => {
        if (msg.innerHTML !== '') checkMsg = false
    })
    if (checkMsg) {
        $dialog.querySelector('#confirm-id').innerHTML = $id.value
        $dialog.querySelector('#confirm-pw').innerHTML = $pw.value
        $dialog.showModal()
    }
})

$dialog.addEventListener('click', (e) => {
    handleDialog(e)
})

$uiControlBtn.addEventListener('click', (e) => {
    handleFontControl(e)
})

const checkValidation = (key, value) => {
    switch (key) {
        case 'id':
            return /^[a-z0-9_-]{5,20}$/.test(value)
                ? ''
                : 'ID는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
        case 'pw':
            return /^[a-zA-Z0-9]{8,16}$/.test(value)
                ? ''
                : '비밀번호는 8~16자의 영문 대/소문자, 숫자만 사용 가능합니다.'
        case 'pw-check':
            return value === $pw.value ? '' : '비밀번호가 일치하지 않습니다.'
        default:
            return ''
    }
}

const handleDialog = (e) => {
    switch (e.target.id) {
        case 'cancel-btn':
            $dialog.close()
            break
        case 'approve-btn':
            $dialog.close()
            alert('가입되었습니다 🥳')
            break
        default:
            break
    }
}

const handleFontControl = (e) => {
    const $increaseBtn = $uiControlBtn.querySelector('#increase-font-btn')
    const $decreaseBtn = $uiControlBtn.querySelector('#decrease-font-btn')

    switch (e.target.id) {
        case 'increase-font-btn':
            let fontSizeI = document.body.style.fontSize
            $decreaseBtn.removeAttribute('disabled')
            if (fontSizeI === '20px') {
                $increaseBtn.setAttribute('disabled', '')
                return
            }
            fontSizeI = fontSizeI.replace('px', '')
            document.body.style.fontSize = `${Number(fontSizeI) + 1}px`
            break
        case 'decrease-font-btn':
            let fontSizeD = document.body.style.fontSize
            $increaseBtn.removeAttribute('disabled')
            if (fontSizeD === '12px') {
                $decreaseBtn.setAttribute('disabled', '')
                return
            }
            fontSizeD = fontSizeD.replace('px', '')
            document.body.style.fontSize = `${Number(fontSizeD) - 1}px`
            break
        default:
            break
    }
}
