import ColorPicker from './color-picker'
import './App.css'

function App() {
    const colorList = [
        '#FF5733',
        '#EAFF33',
        '#62FF33',
        '#33FFAD',
        '#337CFF',
        '#9D33FF'
    ]

    return <ColorPicker colorList={colorList} />
}

export default App
