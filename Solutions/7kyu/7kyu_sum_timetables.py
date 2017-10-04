def sum_times_tables(table,a,b):
    return sum(sum(i*j for j in table) for i in range(a,b+1))
