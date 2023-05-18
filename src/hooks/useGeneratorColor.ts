const COLORS = ['blue', 'green', 'purple', 'red', 'orange',
    '#ff80ed', '#008080', '#003366', '#f08080', '#ff00ff'];

const useGeneratorColor = () => {
    const getColorCard = (): string => {
        const randomIndexColor = Math.floor(Math.random() * 11)
        return COLORS[randomIndexColor]
    }

    return {
    getColorCard
}
}

export default useGeneratorColor