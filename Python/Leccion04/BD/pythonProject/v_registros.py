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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' #placeholder
            entrada = input('Digite los id_persona a buscar(separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)

            cursor.execute(sentencia, llaves_primarias)  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall()  # Recuperamos todos los registros que seran una lista - el fetchall nos devuelve una lista con tuplas y el fetchone directamente nos devuelve una tupla
            for registro in registros:
                print(registro)  # Recibimos una lista pero internamente tenemos dos tuplas [(),()]
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()



