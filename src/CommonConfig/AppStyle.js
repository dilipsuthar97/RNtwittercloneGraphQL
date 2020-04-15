import { Colors, Scale, Matrics } from '.'

const AppStyle = {
    shadowOpt: {
        color: Colors.BLACK,
        border: Scale(2),
        radius: Scale(3),
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: Scale(5) }
    },
    headerTitleStyle: {
        color: Colors.WHITE,
        fontSize: Scale(16)
    },
    headerStyle: {
        backgroundColor: Colors.PRIMARY
    },
    safeAreaStyle: {
        backgroundColor: Colors.SURFACE,
        flex: 1,
    },
    root: {
        flex: 1, backgroundColor: Colors.SURFACE, alignSelf: 'center', width: '100%'
    }
}

export default AppStyle;