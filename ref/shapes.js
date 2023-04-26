//class shape with constructor to set the color
class Shape{


        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }


class Circle extends Shape{
    render(){
        return `<circle cx="100%" cy="100%" r="200" height="100%" width="100%" fill="${this.color}"/>`
    }
}
class Square extends Shape{
    render(){
        return `<rect x="100" height="400" width="400" fill="${this.color}"/>`
    }
}
