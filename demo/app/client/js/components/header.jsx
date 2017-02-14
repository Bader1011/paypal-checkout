
import React from 'react';

import { Toggle } from './toggle';

export let Header = React.createClass({
    render() {
        return (
            <header>
                <h1>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjM1cHgiIGhlaWdodD0iNjBweCIgdmlld0JveD0iMCAwIDIzNSA2MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjM1IDYwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIG9wYWNpdHk9IjAuMiIgZmlsbD0iIzIzMUYyMCIgZD0iTTE3OS4yNzksNy4zNDJIMTY2LjA3Yy0wLjkwNCwwLTEuNjcxLDAuNjUzLTEuODExLDEuNTQ3bC01LjMzNywzMy44NTYNCgkJYy0wLjEwNSwwLjY2OCwwLjQwOSwxLjI3OSwxLjA4OSwxLjI3OWg2Ljc3YzAuNjMxLDAsMS4xNzItMC40NjYsMS4yNy0xLjA5MmwxLjUxMi05LjU5NWMwLjE0NC0wLjg5LDAuOTExLTEuNTUsMS44MTQtMS41NWg0LjE3OQ0KCQljOC42OTMsMCwxMy43MTUtNC4yMDgsMTUuMDI0LTEyLjU1NWMwLjU4OS0zLjY0MywwLjAyMy02LjUxMS0xLjY4NC04LjUyMUMxODcuMDIsOC41MDksMTgzLjY4OSw3LjM0MiwxNzkuMjc5LDcuMzQyeg0KCQkgTTE4MC43OTksMTkuNzA2Yy0wLjcxOSw0Ljc0Mi00LjM0NCw0Ljc0Mi03Ljg0Niw0Ljc0MmgtMS45ODlsMS4zOTktOC44NWMwLjA4Mi0wLjUzMSwwLjU0OC0wLjkyNiwxLjA4Ny0wLjkyNmgwLjkwOQ0KCQljMi4zODYsMCw0LjY0LDAsNS44MDEsMS4zNDhDMTgwLjg1LDE2LjgzNywxODEuMDY1LDE4LjA0MiwxODAuNzk5LDE5LjcwNnoiLz4NCgk8cGF0aCBvcGFjaXR5PSIwLjIiIGZpbGw9IiMyMzFGMjAiIGQ9Ik04NS4xMDEsNy4zNDJINzEuODkyYy0wLjkwMywwLTEuNjcxLDAuNjUzLTEuODEsMS41NDdsLTUuMzM1LDMzLjg1Ng0KCQljLTAuMTExLDAuNjY4LDAuNDA1LDEuMjc5LDEuMDg2LDEuMjc5aDYuMzA0YzAuODk2LDAsMS42NjctMC42NiwxLjgxLTEuNTU5bDEuNDQ2LTkuMTI4YzAuMTM2LTAuODksMC45MDMtMS41NSwxLjgwNy0xLjU1aDQuMTgNCgkJYzguNjk4LDAsMTMuNzE1LTQuMjA4LDE1LjAyNy0xMi41NTVjMC41ODQtMy42NDMsMC4wMjUtNi41MTEtMS42ODEtOC41MjFDOTIuODQ3LDguNTA5LDg5LjUxNiw3LjM0Miw4NS4xMDEsNy4zNDJ6IE04Ni42MjUsMTkuNzA2DQoJCWMtMC43MjQsNC43NDItNC4zNDUsNC43NDItNy44NDEsNC43NDJoLTEuOTk4bDEuNDAyLTguODVjMC4wODItMC41MzEsMC41MzgtMC45MjYsMS4wODMtMC45MjZoMC45MTVjMi4zODUsMCw0LjY0MSwwLDUuNzksMS4zNDgNCgkJQzg2LjY3MywxNi44MzcsODYuODc5LDE4LjA0Miw4Ni42MjUsMTkuNzA2eiIvPg0KCTxwYXRoIG9wYWNpdHk9IjAuMiIgZmlsbD0iIzIzMUYyMCIgZD0iTTEyNC41NjMsMTkuNTU2aC02LjMxN2MtMC41NDYsMC0xLjAwOCwwLjM5NC0xLjA5LDAuOTMzbC0wLjI3OSwxLjc2M2wtMC40NDUtMC42MzgNCgkJYy0xLjM2OC0xLjk4Ni00LjQxNy0yLjY1Mi03LjQ2NS0yLjY1MmMtNi45ODUsMC0xMi45NTEsNS4yOTItMTQuMTE0LDEyLjcyYy0wLjYwOSwzLjcwMSwwLjI1Miw3LjI0NSwyLjM1Myw5LjcxMw0KCQljMS45MjksMi4yNzIsNC42ODcsMy4yMTIsNy45NjMsMy4yMTJjNS42MzMsMCw4Ljc1Mi0zLjYxNyw4Ljc1Mi0zLjYxN2wtMC4yNzksMS43NTdjLTAuMTA3LDAuNjY4LDAuNDA5LDEuMjc5LDEuMDgzLDEuMjc5aDUuNjk4DQoJCWMwLjg5OSwwLDEuNjY3LTAuNjYsMS44MTEtMS41NTlsMy40Mi0yMS42NDFDMTI1Ljc1NywyMC4xNTgsMTI1LjI0NSwxOS41NTYsMTI0LjU2MywxOS41NTZ6IE0xMTUuNzU0LDMxLjg2DQoJCWMtMC42MTMsMy42MTctMy40ODEsNi4wMzgtNy4xMzgsNi4wMzhjLTEuODI5LDAtMy4zLTAuNTg4LTQuMjQ2LTEuNzA3Yy0wLjkzNy0xLjEwNC0xLjI4NC0yLjY4Mi0wLjk5NC00LjQzOA0KCQljMC41NzEtMy41NzgsMy40ODUtNi4wODcsNy4wODgtNi4wODdjMS44MDEsMCwzLjI1NiwwLjU5Niw0LjIxMSwxLjcyOEMxMTUuNjQ5LDI4LjUyNiwxMTYuMDMsMzAuMTExLDExNS43NTQsMzEuODZ6Ii8+DQoJPHBhdGggb3BhY2l0eT0iMC4yIiBmaWxsPSIjMjMxRjIwIiBkPSJNMjE4Ljc0MiwxOS41NTZoLTYuMzI0Yy0wLjU0MiwwLTEuMDAxLDAuMzk0LTEuMDkzLDAuOTMzbC0wLjI3MSwxLjc2M2wtMC40NDMtMC42MzgNCgkJYy0xLjM3MS0xLjk4Ni00LjQxOS0yLjY1Mi03LjQ2Ny0yLjY1MmMtNi45ODksMC0xMi45NTEsNS4yOTItMTQuMTEyLDEyLjcyYy0wLjYwNiwzLjcwMSwwLjI1NSw3LjI0NSwyLjM1NCw5LjcxMw0KCQljMS45MjksMi4yNzIsNC42ODIsMy4yMTIsNy45NTksMy4yMTJjNS42MzQsMCw4Ljc1NC0zLjYxNyw4Ljc1NC0zLjYxN2wtMC4yODMsMS43NTdjLTAuMTAzLDAuNjY4LDAuNDA5LDEuMjc5LDEuMDg5LDEuMjc5aDUuNjk1DQoJCWMwLjksMCwxLjY2OC0wLjY2LDEuODEzLTEuNTU5bDMuNDE4LTIxLjY0MUMyMTkuOTM1LDIwLjE1OCwyMTkuNDE5LDE5LjU1NiwyMTguNzQyLDE5LjU1NnogTTIwOS45MjgsMzEuODYNCgkJYy0wLjYwNywzLjYxNy0zLjQ3Myw2LjAzOC03LjEzNSw2LjAzOGMtMS44MzcsMC0zLjMwNC0wLjU4OC00LjI0Ny0xLjcwN2MtMC45MzgtMS4xMDQtMS4yODctMi42ODItMC45ODgtNC40MzgNCgkJYzAuNTcyLTMuNTc4LDMuNDc5LTYuMDg3LDcuMDgxLTYuMDg3YzEuODA2LDAsMy4yNjEsMC41OTYsNC4yMiwxLjcyOEMyMDkuODI4LDI4LjUyNiwyMTAuMjA1LDMwLjExMSwyMDkuOTI4LDMxLjg2eiIvPg0KCTxwYXRoIG9wYWNpdHk9IjAuMiIgZmlsbD0iIzIzMUYyMCIgZD0iTTE1OC4yMzksMTkuNTU2aC02LjM1NmMtMC42MDcsMC0xLjE3MywwLjMwMS0xLjUxNSwwLjgwM0wxNDEuNiwzMy4yNzNsLTMuNzE1LTEyLjQxMw0KCQljLTAuMjMzLTAuNzc1LTAuOTQ3LTEuMzA1LTEuNzU0LTEuMzA1aC02LjI1MmMtMC43NTMsMC0xLjI3NywwLjczOC0xLjA0MSwxLjQ1Nmw2Ljk5OSwyMC41MzhsLTYuNTc5LDkuMjg0DQoJCWMtMC41MTksMC43MzMsMCwxLjc0NiwwLjg5NCwxLjc0Nmg2LjM1YzAuNTk4LDAsMS4xNjUtMC4zMDIsMS41MDktMC43OTFsMjEuMTM0LTMwLjUwNQ0KCQlDMTU5LjY1MywyMC41NTIsMTU5LjEyOCwxOS41NTYsMTU4LjIzOSwxOS41NTZ6Ii8+DQoJPHBhdGggb3BhY2l0eT0iMC4yIiBmaWxsPSIjMjMxRjIwIiBkPSJNMjI2LjE5NCw4LjI2OWwtNS40MjQsMzQuNDc3Yy0wLjEsMC42NjgsMC40MTYsMS4yNzksMS4wOTMsMS4yNzloNS40NQ0KCQljMC45MDEsMCwxLjY3My0wLjY2LDEuODEtMS41NTlsNS4zNDgtMzMuODU0YzAuMTA2LTAuNjY3LTAuNDE3LTEuMjctMS4wODktMS4yN2gtNi4xQzIyNi43MzYsNy4zNDIsMjI2LjI3OCw3LjczOCwyMjYuMTk0LDguMjY5eiINCgkJLz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTc5LjI3OSwxMS4wMTVIMTY2LjA3Yy0wLjkwNCwwLTEuNjcxLDAuNjUzLTEuODExLDEuNTQ1bC01LjMzNywzMy44NTkNCgkJCQljLTAuMTA1LDAuNjY1LDAuNDA5LDEuMjc2LDEuMDg5LDEuMjc2aDYuNzdjMC42MzEsMCwxLjE3Mi0wLjQ2NywxLjI3LTEuMDg5bDEuNTEyLTkuNTk4YzAuMTQ0LTAuODg2LDAuOTExLTEuNTQ3LDEuODE0LTEuNTQ3DQoJCQkJaDQuMTc5YzguNjkzLDAsMTMuNzE1LTQuMjA5LDE1LjAyNC0xMi41NThjMC41ODktMy42NDIsMC4wMjMtNi41MTItMS42ODQtOC41MTlDMTg3LjAyLDEyLjE4LDE4My42ODksMTEuMDE1LDE3OS4yNzksMTEuMDE1eg0KCQkJCSBNMTgwLjc5OSwyMy4zNzdjLTAuNzE5LDQuNzQtNC4zNDQsNC43NC03Ljg0Niw0Ljc0aC0xLjk4OWwxLjM5OS04Ljg0NWMwLjA4Mi0wLjUzNSwwLjU0OC0wLjkyOCwxLjA4Ny0wLjkyOGgwLjkwOQ0KCQkJCWMyLjM4NiwwLDQuNjQsMCw1LjgwMSwxLjM1MkMxODAuODUsMjAuNTA5LDE4MS4wNjUsMjEuNzE0LDE4MC43OTksMjMuMzc3eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTg1LjEwMSwxMS4wMTVINzEuODkyYy0wLjkwMywwLTEuNjcxLDAuNjUzLTEuODEsMS41NDVsLTUuMzM1LDMzLjg1OQ0KCQkJCWMtMC4xMTEsMC42NjUsMC40MDUsMS4yNzYsMS4wODYsMS4yNzZoNi4zMDRjMC44OTYsMCwxLjY2Ny0wLjY2MSwxLjgxLTEuNTU1bDEuNDQ2LTkuMTMyYzAuMTM2LTAuODg2LDAuOTAzLTEuNTQ3LDEuODA3LTEuNTQ3DQoJCQkJaDQuMThjOC42OTgsMCwxMy43MTUtNC4yMDksMTUuMDI3LTEyLjU1OGMwLjU4NC0zLjY0MiwwLjAyNS02LjUxMi0xLjY4MS04LjUxOUM5Mi44NDcsMTIuMTgsODkuNTE2LDExLjAxNSw4NS4xMDEsMTEuMDE1eg0KCQkJCSBNODYuNjI1LDIzLjM3N2MtMC43MjQsNC43NC00LjM0NSw0Ljc0LTcuODQxLDQuNzRoLTEuOTk4bDEuNDAyLTguODQ1YzAuMDgyLTAuNTM1LDAuNTM4LTAuOTI4LDEuMDgzLTAuOTI4aDAuOTE1DQoJCQkJYzIuMzg1LDAsNC42NDEsMCw1Ljc5LDEuMzUyQzg2LjY3MywyMC41MDksODYuODc5LDIxLjcxNCw4Ni42MjUsMjMuMzc3eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNC41NjMsMjMuMjI3aC02LjMxN2MtMC41NDYsMC0xLjAwOCwwLjM5Ni0xLjA5LDAuOTMybC0wLjI3OSwxLjc2NWwtMC40NDUtMC42MzgNCgkJCQljLTEuMzY4LTEuOTg2LTQuNDE3LTIuNjUzLTcuNDY1LTIuNjUzYy02Ljk4NSwwLTEyLjk1MSw1LjI5Mi0xNC4xMTQsMTIuNzIzYy0wLjYwOSwzLjY5OCwwLjI1Miw3LjI0MSwyLjM1Myw5LjcwOQ0KCQkJCWMxLjkyOSwyLjI3Miw0LjY4NywzLjIxMiw3Ljk2MywzLjIxMmM1LjYzMywwLDguNzUyLTMuNjEzLDguNzUyLTMuNjEzbC0wLjI3OSwxLjc1N2MtMC4xMDcsMC42NjUsMC40MDksMS4yNzYsMS4wODMsMS4yNzZoNS42OTgNCgkJCQljMC44OTksMCwxLjY2Ny0wLjY2MSwxLjgxMS0xLjU1NWwzLjQyLTIxLjY0NEMxMjUuNzU3LDIzLjgzLDEyNS4yNDUsMjMuMjI3LDEyNC41NjMsMjMuMjI3eiBNMTE1Ljc1NCwzNS41MzQNCgkJCQljLTAuNjEzLDMuNjEzLTMuNDgxLDYuMDM4LTcuMTM4LDYuMDM4Yy0xLjgyOSwwLTMuMy0wLjU4OC00LjI0Ni0xLjcwN2MtMC45MzctMS4xMDUtMS4yODQtMi42ODUtMC45OTQtNC40NDENCgkJCQljMC41NzEtMy41NzgsMy40ODUtNi4wODYsNy4wODgtNi4wODZjMS44MDEsMCwzLjI1NiwwLjU5NCw0LjIxMSwxLjcyOEMxMTUuNjQ5LDMyLjE5NywxMTYuMDMsMzMuNzgxLDExNS43NTQsMzUuNTM0eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIxOC43NDIsMjMuMjI3aC02LjMyNGMtMC41NDIsMC0xLjAwMSwwLjM5Ni0xLjA5MywwLjkzMmwtMC4yNzEsMS43NjVsLTAuNDQzLTAuNjM4DQoJCQkJYy0xLjM3MS0xLjk4Ni00LjQxOS0yLjY1My03LjQ2Ny0yLjY1M2MtNi45ODksMC0xMi45NTEsNS4yOTItMTQuMTEyLDEyLjcyM2MtMC42MDYsMy42OTgsMC4yNTUsNy4yNDEsMi4zNTQsOS43MDkNCgkJCQljMS45MjksMi4yNzIsNC42ODIsMy4yMTIsNy45NTksMy4yMTJjNS42MzQsMCw4Ljc1NC0zLjYxMyw4Ljc1NC0zLjYxM2wtMC4yODMsMS43NTdjLTAuMTAzLDAuNjY1LDAuNDA5LDEuMjc2LDEuMDg5LDEuMjc2aDUuNjk1DQoJCQkJYzAuOSwwLDEuNjY4LTAuNjYxLDEuODEzLTEuNTU1bDMuNDE4LTIxLjY0NEMyMTkuOTM1LDIzLjgzLDIxOS40MTksMjMuMjI3LDIxOC43NDIsMjMuMjI3eiBNMjA5LjkyOCwzNS41MzQNCgkJCQljLTAuNjA3LDMuNjEzLTMuNDczLDYuMDM4LTcuMTM1LDYuMDM4Yy0xLjgzNywwLTMuMzA0LTAuNTg4LTQuMjQ3LTEuNzA3Yy0wLjkzOC0xLjEwNS0xLjI4Ny0yLjY4NS0wLjk4OC00LjQ0MQ0KCQkJCWMwLjU3Mi0zLjU3OCwzLjQ3OS02LjA4Niw3LjA4MS02LjA4NmMxLjgwNiwwLDMuMjYxLDAuNTk0LDQuMjIsMS43MjhDMjA5LjgyOCwzMi4xOTcsMjEwLjIwNSwzMy43ODEsMjA5LjkyOCwzNS41MzR6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTU4LjIzOSwyMy4yMjdoLTYuMzU2Yy0wLjYwNywwLTEuMTczLDAuMzAyLTEuNTE1LDAuODA0TDE0MS42LDM2Ljk0M2wtMy43MTUtMTIuNDENCgkJCQljLTAuMjMzLTAuNzc1LTAuOTQ3LTEuMzA3LTEuNzU0LTEuMzA3aC02LjI1MmMtMC43NTMsMC0xLjI3NywwLjczOS0xLjA0MSwxLjQ1Nmw2Ljk5OSwyMC41MzdsLTYuNTc5LDkuMjg5DQoJCQkJYy0wLjUxOSwwLjcyOSwwLDEuNzQxLDAuODk0LDEuNzQxaDYuMzVjMC41OTgsMCwxLjE2NS0wLjMwMiwxLjUwOS0wLjc5MWwyMS4xMzQtMzAuNTA0DQoJCQkJQzE1OS42NTMsMjQuMjI0LDE1OS4xMjgsMjMuMjI3LDE1OC4yMzksMjMuMjI3eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIyNi4xOTQsMTEuOTM5bC01LjQyNCwzNC40OGMtMC4xLDAuNjY1LDAuNDE2LDEuMjc2LDEuMDkzLDEuMjc2aDUuNDVjMC45MDEsMCwxLjY3My0wLjY2MSwxLjgxLTEuNTU1DQoJCQkJbDUuMzQ4LTMzLjg1NmMwLjEwNi0wLjY2OC0wLjQxNy0xLjI3LTEuMDg5LTEuMjdoLTYuMUMyMjYuNzM2LDExLjAxNSwyMjYuMjc4LDExLjQxLDIyNi4xOTQsMTEuOTM5eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBvcGFjaXR5PSIwLjY4IiBmaWxsPSIjRkZGRkZGIiBkPSJNMzkuMjU3LDE2LjcyN2MwLjYzLTMuOTk1LTAuMDA4LTYuNzE2LTIuMTY2LTkuMThjLTIuMzg1LTIuNzEzLTYuNjg0LTMuODc1LTEyLjE4NC0zLjg3NQ0KCQkJSDguOTNjLTEuMTI1LDAtMi4wODcsMC44MjEtMi4yNTksMS45MjlMMC4wMTYsNDcuNzg2Yy0wLjEyOCwwLjgyOSwwLjUxNCwxLjU4MSwxLjM1NiwxLjU4MWg5Ljg2N2wtMC42ODgsNC4zMg0KCQkJYy0wLjExMSwwLjcyNiwwLjQ1MSwxLjM4NiwxLjE4NiwxLjM4Nmg4LjMxNmMwLjk4NiwwLDEuODItMC43MTgsMS45NzktMS42ODhsMC4wNzktMC40MjRsMS41NjQtOS45MjdsMC4xMDMtMC41NTQNCgkJCWMwLjE1NS0wLjk3LDAuOTg3LTEuNjg4LDEuOTczLTEuNjg4aDEuMjQ1YzguMDUzLDAsMTQuMzYyLTMuMjcsMTYuMTk5LTEyLjczNGMwLjc3My0zLjk1NSwwLjM3My03LjI1My0xLjY2MS05LjU3Mw0KCQkJQzQwLjkyLDE3Ljc4MSw0MC4xNTIsMTcuMjA0LDM5LjI1NywxNi43MjdMMzkuMjU3LDE2LjcyNyIvPg0KCQk8cGF0aCBvcGFjaXR5PSIwLjciIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zOS4yNTcsMTYuNzI3YzAuNjMtMy45OTUtMC4wMDgtNi43MTYtMi4xNjYtOS4xOGMtMi4zODUtMi43MTMtNi42ODQtMy44NzUtMTIuMTg0LTMuODc1DQoJCQlIOC45M2MtMS4xMjUsMC0yLjA4NywwLjgyMS0yLjI1OSwxLjkyOUwwLjAxNiw0Ny43ODZjLTAuMTI4LDAuODI5LDAuNTE0LDEuNTgxLDEuMzU2LDEuNTgxaDkuODY3bDIuNDc1LTE1LjcwNWwtMC4wNzgsMC40ODkNCgkJCWMwLjE3OC0xLjEwNywxLjEyNS0xLjkyOSwyLjI1MS0xLjkyOWg0LjY5YzkuMjAxLDAsMTYuNDEzLTMuNzM5LDE4LjUxNi0xNC41NTdDMzkuMTU1LDE3LjM1MSwzOS4yMTEsMTcuMDM2LDM5LjI1NywxNi43MjciLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE2LjM3NCwxNi43ODRjMC4xMDctMC42NjMsMC41MzktMS4yMTQsMS4xMTEtMS40OTVjMC4yNjYtMC4xMjMsMC41NTYtMC4xODksMC44NjUtMC4xODloMTIuNTIzDQoJCQljMS40ODQsMCwyLjg2NCwwLjA5NSw0LjEzLDAuMjk2YzAuMzU5LDAuMDYxLDAuNzEsMC4xMjYsMS4wNTQsMC4yMDJjMC4zNDQsMC4wNzksMC42NzQsMC4xNjEsMC45OTcsMC4yNTQNCgkJCWMwLjE1OSwwLjA0NSwwLjMxNSwwLjA4OSwwLjQ3NCwwLjE1MWMwLjYxNywwLjIwOCwxLjE5NywwLjQ0NywxLjcyOSwwLjcyNGMwLjYzLTMuOTk1LTAuMDA4LTYuNzE2LTIuMTY2LTkuMTgNCgkJCWMtMi4zODUtMi43MTMtNi42ODQtMy44NzUtMTIuMTg0LTMuODc1SDguOTNjLTEuMTI1LDAtMi4wODcsMC44MjEtMi4yNTksMS45MjlMMC4wMTYsNDcuNzg2DQoJCQljLTAuMTI4LDAuODI5LDAuNTE0LDEuNTgxLDEuMzU2LDEuNTgxaDkuODY3bDIuNDc1LTE1LjcwNUwxNi4zNzQsMTYuNzg0eiIvPg0KCTwvZz4NCgk8ZyBvcGFjaXR5PSIwLjIiPg0KCQk8cGF0aCBmaWxsPSIjMjMxRjIwIiBkPSJNMzkuMjU3LDE2LjcyN2MwLjg5NiwwLjQ3NywxLjY2MywxLjA1NCwyLjI3NiwxLjc2MWMxLDEuMTQsMS41OTYsMi41MjEsMS44NjIsNC4wOTQNCgkJCWMwLjMzLTMuMTUxLTAuMTY3LTUuODI3LTEuODc5LTcuNzhjLTAuNTc3LTAuNjYxLTEuMjk4LTEuMjAxLTIuMTItMS42NThDMzkuNDc4LDE0LjIzNCwzOS40NjUsMTUuMzksMzkuMjU3LDE2LjcyN3oiLz4NCgkJPHBhdGggZmlsbD0iIzIzMUYyMCIgZD0iTTAuNDIyLDQ1LjIyNEw2LjY3MSw1LjYwMUM2Ljg0Myw0LjQ5Myw3LjgwNSwzLjY3Miw4LjkzLDMuNjcyaDE1Ljk3OGM1LjUsMCw5Ljc5OCwxLjE2MSwxMi4xODQsMy44NzUNCgkJCWMxLjI0NywxLjQyNSwxLjkyOSwyLjk2NiwyLjIxMSw0Ljc1NWMwLjQyOC0zLjU3MS0wLjIxLTYuMTM1LTIuMjI3LTguNDI5QzM0LjY5NiwxLjE2MSwzMC40LDAsMjQuOSwwSDguOTQ1DQoJCQljLTEuMTI3LDAtMi4wOCwwLjgxNy0yLjI1OSwxLjkyOUwwLjA0Miw0NC4wNjZDLTAuMDMsNDQuNTE0LDAuMTM0LDQ0LjkyNiwwLjQyMiw0NS4yMjR6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyMzFGMjAiIGQ9Ik0xMC42NTgsNDkuMzY3bC0wLjA5NCwwLjU5M2MtMC4wNjMsMC40MjgsMC4xMTUsMC44MTIsMC40MDksMS4wNjlsMC4yNjYtMS42NjJIMTAuNjU4eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" alt="PayPal" />
                    <span>Checkout Integration Patterns</span>
                </h1>

                <Toggle left="sandbox" right="production" default="left" onChange={this.props.onChangeEnv} />
            </header>
        );
    }
});