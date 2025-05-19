import psycopg2 # Esto es para conectarnos a Postgre
conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor: # El with cierra el cursor
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mCanto@mail.com'),
                ('Marcelo', 'Cuenca', 'cuencaM@mail.com')
            ) # Es una tupla de tuplas
            cursor.executemany(sentencia, valores)  # De esta manera ejecutamos la sentencia
            # conexion.commit() esto se utiliza para guardar los cambios en la BD pero no lo utilizamos ya q lo hace el with
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()



